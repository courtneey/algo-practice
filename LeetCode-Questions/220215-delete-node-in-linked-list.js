/*

Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

It is guaranteed that the node to be deleted is not a tail node in the list.

*/

function deleteNode(node) {
  // swap values of node and next
  let next = node.next;
  node.val = next.val;
  next.val = node.val;

  // point node to next.next
  node.next = next.next;
}
