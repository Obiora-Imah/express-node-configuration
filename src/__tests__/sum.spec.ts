import { describe, expect, it } from "vitest";
import { sum } from "#utils/sum.js";

describe("sum function", () => {
  it("should add two positive numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should add a positive and a negative number correctly", () => {
    expect(sum(5, -3)).toBe(2);
  });

  it("should add two negative numbers correctly", () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  it("should return zero when adding zero to zero", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("should handle large numbers correctly", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
  });
});
