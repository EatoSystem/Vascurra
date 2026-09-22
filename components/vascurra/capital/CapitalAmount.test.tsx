import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { CapitalAmount, CAPITAL_AMOUNT_LABELS } from "./CapitalAmount";

describe("CapitalAmount", () => {
  it("renders every approved amount as one semantic lockup", () => {
    for (const [amount, label] of Object.entries(CAPITAL_AMOUNT_LABELS)) {
      const markup = renderToStaticMarkup(<CapitalAmount amount={amount as keyof typeof CAPITAL_AMOUNT_LABELS}/>);
      expect(markup).toContain(`aria-label="${label}"`);
      expect(markup).toContain(`data-capital-amount="${amount}"`);
      expect(markup).toContain("aria-hidden=\"true\"");
    }
  });

  it("uses a true en dash and separate range typography", () => {
    const markup = renderToStaticMarkup(<CapitalAmount amount="€50–100M+"/>);
    expect(markup).toContain("–");
    expect(markup).not.toContain("50-100");
    expect(markup).toMatch(/range[^>]*>–</);
  });
});
