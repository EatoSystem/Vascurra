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
 * The gate fails closed. If the password configuration is unavailable, the
 * unfinished homepage remains hidden behind the holding page.
 */

const TOKEN_VERSION = "v1";
const TOKEN_PURPOSE = "vascurra-marketing-preview";

function configuredPassword(): string | null {
  const value = process.env.HOLDING_PAGE_PASSWORD?.normalize("NFKC");
  return value ? value : null;
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

async function signingKey(password: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign", "verify"],
  );
}

function tokenMessage(expiresAt: string): ArrayBuffer {
  return new TextEncoder().encode(`${TOKEN_VERSION}:${TOKEN_PURPOSE}:${expiresAt}`).buffer as ArrayBuffer;
}

export function isHoldingGateEnabled(): boolean {
  return configuredPassword() !== null;
}

export async function passwordsMatch(input: string): Promise<boolean> {
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
  const password = configuredPassword();
  if (!password) return null;
  const expiresAt = String(now + 8 * 60 * 60 * 1000);
  const signature = await crypto.subtle.sign("HMAC", await signingKey(password), tokenMessage(expiresAt));
  return `${TOKEN_VERSION}.${expiresAt}.${encode(new Uint8Array(signature))}`;
}

export async function isHoldingUnlocked(
  cookieValue: string | undefined,
  now = Date.now(),
): Promise<boolean> {
  const password = configuredPassword();
  if (!password) return true;
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
    await signingKey(password),
    decoded,
    tokenMessage(expiresAt),
  );
}
