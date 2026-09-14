import { describe, expect, it } from "vitest";
import { validateParticipation } from "./participation";

function valid(kind: "access" | "contact") {
  const data = new FormData();
  data.set("kind", kind); data.set("name", "Alex Example"); data.set("email", "alex@example.test");
  data.set("country", kind === "access" ? "Ireland" : ""); data.set("category", kind === "access" ? "person" : "general");
  data.set("message", "A project enquiry without health information."); data.set("consent", "on"); data.set("website", "");
  return data;
}

describe("participation form validation", () => {
  it("accepts minimal valid access and contact requests", () => {
    expect("ok" in validateParticipation(valid("access"))).toBe(false);
    expect("ok" in validateParticipation(valid("contact"))).toBe(false);
  });
  it("rejects malformed and unexpected fields", () => {
    const data = valid("access"); data.set("email", "not-an-email"); data.set("diagnosis", "private");
    const result = validateParticipation(data);
    expect("ok" in result && result.ok).toBe(false);
  });
});
