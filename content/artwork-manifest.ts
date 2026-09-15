import { innerArtworkManifest } from "./inner-site";
import { personalArtworkManifest } from "./personal";

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
] as const;
