export {
  HOLDING_COOKIE,
  HOLDING_COOKIE_MAX_AGE,
  isHoldingPublicPath,
} from "./holding-public";

/**
 * Shared preview gate for the public site. This is not an account system and
 * does not protect health data — it only holds the full marketing pages until
 * the agreed preview password is entered.
 *
 * IMPORTANT: the gate fails closed. Production still requires the configured
 * HOLDING_PAGE_PASSWORD. Vercel Preview deployments use a fixed review-password
 * verifier so design review does not break when Preview environment variables
 * drift. The stored value is a one-way digest, not the plaintext review password.
 */

const TOKEN_VERSION = "v1";
const TOKEN_PURPOSE = "vascurra-marketing-preview";
const PREVIEW_PASSWORD_SHA256 =
  "13e7f80bdee94cf88288ecfaaaa1bae7fb3cf4c8e6c3cbcb9d4f99821e609672";

function configuredPassword(): string | null {
  const value = process.env.HOLDING_PAGE_PASSWORD?.normalize("NFKC");
  return value ? value : null;
}

function isVercelPreview(): boolean {
  return process.env.VERCEL_ENV === "preview";
}

function signingSecret(): string | null {
  if (isVercelPreview()) return PREVIEW_PASSWORD_SHA256;
  return configuredPassword();
}

function encode(value: Uint8Array): string {
  let binary = "";
  for (const byte of value) binary += String.fromCharCode(byte);
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replace(/=+$/, "");
}

function decode(value: string): ArrayBuffer | null {
  try {
    const padded = value.replaceAll("-", "+").replaceAll("_", "/").padEnd(Math.ceil(value.length / 4) * 4, "=");
    const binary = atob(padded);
    return Uint8Array.from(binary, (character) => character.charCodeAt(0)).buffer as ArrayBuffer;
  } catch {
    return null;
  }
}

async function signingKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

function tokenMessage(expiresAt: string): ArrayBuffer {
  return new TextEncoder().encode(`${TOKEN_VERSION}:${TOKEN_PURPOSE}:${expiresAt}`).buffer as ArrayBuffer;
}

async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(value.normalize("NFKC")),
  );
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export function isHoldingGateEnabled(): boolean {
  return isVercelPreview() || configuredPassword() !== null;
}

export async function passwordsMatch(input: string): Promise<boolean> {
  if (isVercelPreview()) {
    return (await sha256Hex(input)) === PREVIEW_PASSWORD_SHA256;
  }

  const expected = configuredPassword();
  if (!expected) return false;
  const key = await signingKey(expected);
  const expectedMac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(expected));
  return crypto.subtle.verify(
    "HMAC",
    key,
    expectedMac,
    new TextEncoder().encode(input.normalize("NFKC")),
  );
}

export async function createHoldingToken(now = Date.now()): Promise<string | null> {
  const secret = signingSecret();
  if (!secret) return null;
  const expiresAt = String(now + 8 * 60 * 60 * 1000);
  const signature = await crypto.subtle.sign("HMAC", await signingKey(secret), tokenMessage(expiresAt));
  return `${TOKEN_VERSION}.${expiresAt}.${encode(new Uint8Array(signature))}`;
}

export async function isHoldingUnlocked(
  cookieValue: string | undefined,
  now = Date.now(),
): Promise<boolean> {
  const secret = signingSecret();
  if (!secret) return false;
  if (!cookieValue) return false;
  const [version, expiresAt, signature] = cookieValue.split(".");
  const expiry = Number(expiresAt);
  if (version !== TOKEN_VERSION || !expiresAt || !Number.isSafeInteger(expiry) || expiry <= now || !signature) {
    return false;
  }
  const decoded = decode(signature);
  if (!decoded) return false;
  return crypto.subtle.verify(
    "HMAC",
    await signingKey(secret),
    decoded,
    tokenMessage(expiresAt),
  );
}
