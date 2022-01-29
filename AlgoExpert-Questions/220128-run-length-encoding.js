/*

Write a function that takes in a non-empty string and returns its run-length encoding.

From Wikipedia, "run-length encoding is a form of lossless data compression in which
runs of data are stored as a single data value and count, rather than as the original
run." For this problem, a run of data is any sequence of consecutive, identical
characters. So the run "AAA" would be run-length-encoded as "3A".

To make things more complicated, however, the input string can contain all sorts of
special characters, including numbers. And since encoded data must be deocdable, this
means that we can't naively run-length-encode long runs. For example, the run
"AAAAAAAAAAAA" (12 As), can't naively be encoded as "12A", since this string can be
decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more
characters) should be encoded in a split fashion; the aforementioned run should be
encoded as "9A3A".

Sample Input
string = "AAAAAAAAAAAAABBCCCCDD"

Sample Output
"9A4A2B4C2D"

*/

function runLengthEncoding(string) {
  let result = "";
  // create a temp variable to track current section
  // create a prev variable to store previously seen character
  let temp = string[0];
  let prev = string[0];

  for (let i = 1; i < string.length; i++) {
    const char = string[i];
    if (char !== prev) {
      // add the newly encoded section to the result, then clear 'temp'
      result += createEncodedSection(temp[0], temp.length);
      temp = "";
    }
    // add current character to temp and set prev before next iteration
    temp += char;
    prev = char;
  }

  result += createEncodedSection(temp[0], temp.length);

  return result;
}

function createEncodedSection(char, count) {
  // short runs can be returned as is
  if (count < 9) return `${count}${char}`;

  let section = "";
  // for runs longer than 9 characters, add to the section and decrement count continuously
  while (count > 9) {
    section += `9${char}`;
    count -= 9;
  }
  // add the remaining count to the section before returning
  section += `${count}${char}`;

  return section;
}
