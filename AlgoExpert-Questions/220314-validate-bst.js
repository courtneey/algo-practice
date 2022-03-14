/*

Write a function that takes in a potentially invalid Binary Search Tree (BST)
and returns a boolean representing whether the BST is valid.

Each BST node has an integer value, a left child node, and a right child node.
A node is said to be a valid BST node if and only if it satisfies the BST property:
its value is strictly greater than the values of every node to its left; its
value is less than or equal to the values of every node to its right; and its
children nodes are either valid BST nodes themselves or None / null.

A BST is valid if and only if all of its nodes are valid BST nodes.

*/

function validateBst(tree) {
  let min = -Infinity;
  let max = Infinity;

  return processNodes(tree, min, max);
}

function processNodes(root, min, max) {
  if (!root) return true;

  // BST is invalid if current node is less than min or greater than/equal to max
  if (min > root.value || root.value >= max) return false;

  // traverse left
  const leftTraversal = processNodes(root.left, min, root.value);

  // traverse right
  const rightTraversal = processNodes(root.right, root.value, max);

  return leftTraversal && rightTraversal;
}
