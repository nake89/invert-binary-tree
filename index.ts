const tree = {
  value: 1,
  left: { value: 2 },
  right: { value: 3, left: { value: 4 }, right: { value: 5 } },
};

function invertTree(node) {
  if (!node) return;

  const right = invertTree(node.right);
  const left = invertTree(node.left);
  if (left) node.left = right;
  if (right) node.right = left;
  return node;
}

console.log(JSON.parse(JSON.stringify(tree)), invertTree(tree));
