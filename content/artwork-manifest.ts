import { innerArtworkManifest } from "./inner-site";
import { personalArtworkManifest } from "./personal";
import { veyaArtworkBriefs } from "./veya";

export const artworkManifest = [
  ...personalArtworkManifest.map((artwork, index) => ({
    route: "/personal",
    section: index === 0 ? "hero" : artwork.title,
    ...artwork,
    humanAppears: artwork.brief.toLowerCase().includes("person") || artwork.brief.toLowerCase().includes("adult"),
    background: "white / transparent",
    status: "placeholder" as const,
  })),
  ...innerArtworkManifest,
  ...veyaArtworkBriefs.map((artwork) => ({
    route: "/veya",
    section: artwork.title,
    assetKey: artwork.assetKey,
    title: artwork.title,
    description: artwork.desktopUse,
    aspectRatio: artwork.aspectRatio,
    mobileAspectRatio: artwork.mobileAspectRatio,
    brief: artwork.brief,
    humanAppears: artwork.assetKey === "veya-perspectives",
    background: "white / transparent",
    status: "placeholder" as const,
  })),
] as const;
