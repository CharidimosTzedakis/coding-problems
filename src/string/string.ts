/**
 * leetcode - longest substring without repeating characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
export function lengthOfLongestSubstring(s: string): number {
  let longestSubString = "";
  let substringCandidate = "";

  for (const c of s) {
    if (Math.ceil(s.length / 2) <= longestSubString.length) {
      break;
    }

    if (substringCandidate.includes(c)) {
      if (substringCandidate.length > longestSubString.length) {
        longestSubString = substringCandidate;
      }
      substringCandidate = "";
    } else {
      substringCandidate = substringCandidate.concat(c);
    }
  }

  console.log(longestSubString);
  return longestSubString.length;
}
