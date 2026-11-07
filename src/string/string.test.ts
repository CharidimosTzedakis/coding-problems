import { describe, expect, it } from "vitest";
import { lengthOfLongestSubstring } from "./string.ts";

describe("lengthOfLongestSubstring", () => {
  it.each([
    ["abcabcbb", 3],
    ["bbbbb", 1],
    ["pwwkew", 3],
    ["", 0],
    [" ", 1],
    ["au", 2],
    ["dvdf", 3],
  ])("%j -> %i", (input, expected) => {
    expect(lengthOfLongestSubstring(input)).toBe(expected);
  });
});
