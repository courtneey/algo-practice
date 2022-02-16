/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

*/

function maxDepth(root) {
  if (!root) return 0;

  return traverseTree(root);
}

function traverseTree(node, depth = 0) {
  // traverse left branch until both children are null
  // for each node encountered, add 1 to depth
  // if depth > max, update max

  // repeat same steps above for right branch

  if (!node) {
    return depth;
  }

  let leftDepth = traverseTree(node.left, depth + 1);
  let rightDepth = traverseTree(node.right, depth + 1);

  return Math.max(leftDepth, rightDepth);
}
