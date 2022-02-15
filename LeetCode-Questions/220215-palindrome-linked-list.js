/*

Given the head of a singly linked list, return true if it is a palindrome.

*/

function isPalindrome(head) {
  if (!head.next) return true;
  // traverse linked list to find halfway point
  let prev = null;
  let curr = head;
  let midFinder = head;
  let endFinder = head;

  while (endFinder !== null && endFinder.next !== null) {
    // advance midFinder +1; advance endFinder +2
    midFinder = curr.next;
    endFinder = endFinder.next.next;

    // reassign prev and curr
    prev = curr;
    curr = midFinder;
  }

  prev.next = null;

  // reverse second half
  const headTwo = reverseList(midFinder);

  // compare corresponding elements of both halves
  // if any do not match, return false
  return compareLists(head, headTwo);
}

function reverseList(head) {
  if (!head) return head;
  let prev = null;
  let curr = head;
  let next = curr.next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

function compareLists(headOne, headTwo) {
  while (headOne !== null) {
    if (headOne.val !== headTwo.val) {
      return false;
    }
    headOne = headOne.next;
    headTwo = headTwo.next;
  }

  return true;
}
