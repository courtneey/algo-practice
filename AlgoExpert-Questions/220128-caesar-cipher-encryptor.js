/*
Given a non-empty string of lowercase letters and a non-negative integer representing a key,
write a function that returns a new string obtained by shifting every letter in the input
string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by
one returns the letter a.

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"


*/

function caesarCipherEncryptor(string, key) {
  let result = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  // store letter indices in hash table
  const alphaPositions = {};
  for (let i = 0; i < alphabet.length; i++) {
    const letter = alphabet[i];
    alphaPositions[letter] = i;
  }

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    // look up current letter's position
    const position = alphaPositions[letter];
    // add input 'key' to this letter's position determine new letter's position
    let newPosition = position + key;
    // if 'newPosition' exceeds indices of 'alphabet', readjust its value so it is within range
    if (newPosition >= 26) {
      newPosition = newPosition % 26;
    }
    result += alphabet[newPosition];
  }
  return result;
}
