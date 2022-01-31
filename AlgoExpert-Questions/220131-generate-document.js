/*

You're given a string of available characters and a string representing a document
that you need to generate. Write a function that determines if you can generate
the document using the available characters. If you can generate the document,
your function should return true; otherwise, it should return false.

You're only able to generate the document if the frequency of unique characters in
the characters string is greater than or equal to the frequency of unique characters
in the document string. For example, if you're given characters = "abcabc" and
document = "aabbccc" you cannot generate the document because you're missing one c.

The document that you need to create may contain any characters, including special
characters, capital letters, numbers, and spaces.

Note: you can always generate the empty string ("").

*/

function generateDocument(characters, document) {
  // create hash table to store frequency of chars in 'characters'
  const charCounts = {};

  for (const char of characters) {
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }

  // determine if there are enough of each char to create 'document'
  for (const char of document) {
    if (!charCounts[char] || charCounts[char] === 0) return false;
    charCounts[char]--;
  }

  return true;
}
