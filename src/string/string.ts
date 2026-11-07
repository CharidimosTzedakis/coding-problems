/**
 * leetcode - longest substring without repeating characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */
export function lengthOfLongestSubstring(s: string): number {
  let longestSubString = "";
  let substringCandidate = "";

  const isPrintableAscii = (s: string): boolean => {
    return /^[\x20-\x7E]*$/.test(s);
  };

  if (!isPrintableAscii(s)) {
    throw Error("invalid string characters");
  }

  if (s.length > 10 ** 5) {
    throw Error("string too large");
  }

  for (const c of s) {
    if (Math.ceil(s.length / 2) <= longestSubString.length) {
      break;
    }

    if (substringCandidate.includes(c)) {
      if (substringCandidate.length > longestSubString.length) {
        longestSubString = substringCandidate;
      }
      substringCandidate = c;
    } else {
      substringCandidate = substringCandidate.concat(c);
    }
  }

  console.log(longestSubString);
  return longestSubString.length;
}

lengthOfLongestSubstring("pwwkew");
