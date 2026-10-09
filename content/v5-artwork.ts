export const V5_ARTWORK_BASE = "/vascurra/homepage/v5/Vascurra_Visual_Concepts_Set_01";

export const v5Artwork = {
  veyaDay: {
    number: "01", filename: "wellness_journey_infographic_wave.png", route: "/preview", section: "Veya — A day with Veya",
    width: 1672, height: 941, bytes: 1403864, background: "white",
    alt: "A flowing daily rhythm moves from morning through questions, preparation and evening reflection.",
  },
  veyaContext: {
    number: "02", filename: "veya_connected_health_data_ecosystem.png", route: "/preview", section: "Veya — Context over time",
    width: 1672, height: 941, bytes: 1668931, background: "white",
    alt: "Veya connects chosen conversations, routines, observations and life context over time with potentially useful perspectives for the person, family, clinicians and separately governed research.",
  },
  capitalNetwork: {
    number: "03", filename: "03_capital_one_stream_becomes_a_network.png", route: "/preview", section: "Capital Flywheel",
    width: 1672, height: 941, bytes: 1571417, background: "transparent",
    alt: "One focused stream of mission capacity grows into a broader connected network.",
  },
  capitalHorizons: {
    number: "04", filename: "04_capital_four_horizons.png", route: "/fund", section: "Capital horizons overview",
    width: 1672, height: 941, bytes: 1526615, background: "transparent",
    alt: "Four widening horizons represent foundation, research engine, international network and permanent global capacity.",
  },
  fundHero: {
    number: "05", filename: "bd70914a-0dbe-4ae3-b936-9e7133934fed.png", route: "/fund", section: "Hero",
    width: 1448, height: 1086, bytes: 1074440, background: "transparent",
    alt: "Capital, AI and compute, research and expertise flow into a shared capacity centre.",
  },
  missionCapacity: {
    number: "06", filename: "06_fund_mission_capacity_is_bigger_than_cash.png", route: "/fund", section: "Mission capacity",
    width: 1672, height: 941, bytes: 1470610, background: "transparent",
    alt: "Seven financial and non-financial resource streams combine into mission capacity.",
  },
  permanentCapacity: {
    number: "07", filename: "07_fund_1B_permanent_global_capacity.png", route: "/fund", section: "Permanent global capacity",
    width: 1672, height: 941, bytes: 1857095, background: "deep navy",
    alt: "A deep-navy global field represents cumulative long-term research, product and infrastructure capacity.",
  },
  capitalFlywheel: {
    number: "08", filename: "08_fund_the_open_capital_flywheel.png", route: "/fund", section: "Open capital flywheel",
    width: 1672, height: 941, bytes: 1322260, background: "transparent",
    alt: "An open ribbon moves through mobilisation, building, learning, creating and reinvestment.",
  },
  productsResearch: {
    number: "09", filename: "09_fund_products_fund_research_loop.png", route: "/fund", section: "Products can help fund research",
    width: 1672, height: 941, bytes: 1506751, background: "transparent",
    alt: "Products, revenue, research, better systems and better products form a continuing reinvestment loop.",
  },
} as const;

export type V5Artwork = (typeof v5Artwork)[keyof typeof v5Artwork];

export function v5ArtworkSrc(artwork: V5Artwork) {
  return `${V5_ARTWORK_BASE}/${encodeURIComponent(artwork.filename)}`;
}
