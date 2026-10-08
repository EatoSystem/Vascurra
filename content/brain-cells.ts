/** Symbolic mission values, not checkout prices or tax configuration. */
export const brainCellUnitCents = 10;
export const ultimateBrainCellTarget = 100_000_000_000;
export const ultimateCapitalTargetCents = ultimateBrainCellTarget * brainCellUnitCents;
export const brainCellMissionTitle = `${ultimateBrainCellTarget / 1_000_000_000} Billion Brain Cells`;
export const brainCellMissionNumber = `${ultimateBrainCellTarget / 1_000_000_000} Billion`;

export function formatScale(value: number): string {
  if (value >= 1_000_000_000) return `${value / 1_000_000_000}B`;
  if (value >= 1_000_000) return `${value / 1_000_000}M`;
  return value.toLocaleString("en-IE");
}

export function cellsFromCents(cents: number): number {
  if (!Number.isSafeInteger(cents) || cents < 0 || cents % brainCellUnitCents !== 0) {
    throw new RangeError("Mission value must be a non-negative safe integer divisible by the unit value.");
  }
  return cents / brainCellUnitCents;
}

/** Parse a plain euro input into integer minor units without multiplying a float. */
export function parseEuroToCents(input: string): number {
  const match = /^(0|[1-9]\d*)(?:\.(\d{1,2}))?$/.exec(input.trim());
  if (!match?.[1]) throw new RangeError("Enter a euro amount with no more than two decimal places.");
  const cents = BigInt(match[1]) * 100n + BigInt((match[2] ?? "").padEnd(2, "0"));
  if (cents > BigInt(Number.MAX_SAFE_INTEGER)) throw new RangeError("Amount exceeds safe currency limits.");
  return Number(cents);
}

/** String inputs preserve the exact entered decimal amount. */
export function brainCellsForEuro(input: string): number {
  return cellsFromCents(parseEuroToCents(input));
}

export function formatMissionEuro(cents: number): string {
  const euro = cents / 100;
  return euro >= 1_000_000 ? `€${formatScale(euro)}` : new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: euro % 1 ? 2 : 0 }).format(euro);
}

export const brainCellHorizons = [
  { id: "01", title: "Foundation", amount: "€1–5M", minCents: 100_000_000, maxCents: 500_000_000, plus: false },
  { id: "02", title: "Research engine", amount: "€10–25M", minCents: 1_000_000_000, maxCents: 2_500_000_000, plus: false },
  { id: "03", title: "International network", amount: "€50–100M+", minCents: 5_000_000_000, maxCents: 10_000_000_000, plus: true },
  { id: "04", title: "Permanent global capacity", amount: "€1B+", minCents: 100_000_000_000, maxCents: null, plus: true },
] as const;

export type BrainCellHorizon = (typeof brainCellHorizons)[number];
export type CapitalHorizonId = BrainCellHorizon["id"];

export function getCapitalHorizon(id: CapitalHorizonId): BrainCellHorizon {
  const horizon = brainCellHorizons.find((candidate) => candidate.id === id);
  if (!horizon) throw new RangeError("Unknown capital horizon");
  return horizon;
}

function formatHorizonBrainCells(horizon: BrainCellHorizon): string {
  return `${formatScale(cellsFromCents(horizon.minCents))}${horizon.maxCents === null ? "" : `–${formatScale(cellsFromCents(horizon.maxCents))}`}${horizon.plus ? "+" : ""} Brain Cells`;
}

export function horizonBrainCells(index: number): string {
  const horizon = brainCellHorizons[index];
  if (!horizon) throw new RangeError("Unknown capital horizon");
  return formatHorizonBrainCells(horizon);
}

export function horizonBrainCellsById(id: CapitalHorizonId): string {
  return formatHorizonBrainCells(getCapitalHorizon(id));
}

export const participationScales = [1, 10, 100, 1_000, 10_000, 1_000_000, 1_000_000_000, ultimateBrainCellTarget] as const;
export const businessScales = [100_000, 1_000_000, 10_000_000, 100_000_000] as const;
export const missionFlow = ["Capital", "Capability", "Research", "Knowledge", "Products", "Revenue", "Reinvestment", "Greater capability"] as const;
export const brainCellSources = [
  { label: "Azevedo et al. (2009): neuronal and nonneuronal cell counts", href: "https://pubmed.ncbi.nlm.nih.gov/19226510/" },
  { label: "NHS: causes of vascular dementia", href: "https://www.nhs.uk/conditions/vascular-dementia/causes/" },
  { label: "NHS: treatment of vascular dementia", href: "https://www.nhs.uk/conditions/vascular-dementia/treatment/" },
] as const;
