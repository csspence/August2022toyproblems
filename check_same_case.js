/*
Write a function that will check if two given characters are the same case.

If either of the characters is not a letter, return -1
If both characters are the same case, return 1
If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1

'A' and 'C' returns 1

'b' and 'G' returns 0

'B' and 'g' returns 0

'0' and '?' returns -1
*/

let sameCase = (a, b) => {
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return !letters.includes(a.toLowerCase()) ? -1
  : !letters.includes(b.toLowerCase()) ? -1
  : a === a.toLowerCase() && b === b.toLowerCase() ? 1
  : a === a.toUpperCase() && b === b.toUpperCase() ? 1
  : 0;
}