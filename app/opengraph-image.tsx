import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social preview generated from brand tokens rather than a raster file, so it
 * stays crisp and requires no image asset. Wordmark and tagline only — the
 * brand mark is added here once the final artwork is supplied.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          backgroundColor: "#f6f9fc",
          backgroundImage:
            "radial-gradient(circle at 78% 18%, rgba(56,189,240,0.30), transparent 55%), radial-gradient(circle at 20% 88%, rgba(52,211,160,0.28), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 104,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#071a2f",
          }}
        >
          Vascurra
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 52,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#0a6b75",
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 44,
            fontSize: 30,
            color: "#1b3a5c",
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          A project in development, exploring how AI can support people
          experiencing vascular cognitive change.
        </div>
      </div>
    ),
    size,
  );
}
