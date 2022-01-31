/*

Write a function that takes in a string of lowercase English-alphabet letters
and returns the index of the string's first non-repeating character.

The first non-repeating character is the first character in a string that
occurs only once.

If the input string doesn't have any non-repeating characters, your function
should return -1.

*/

function firstNonRepeatingCharacter(string) {
  // create hash table to store letter frequencies
  const frequencies = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (!frequencies[char]) {
      frequencies[char] = 1;
    } else {
      frequencies[char]++;
    }
  }

  // determine if any letters occur only once, and return the index once found
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    if (frequencies[letter] === 1) return i;
  }

  return -1;
}
