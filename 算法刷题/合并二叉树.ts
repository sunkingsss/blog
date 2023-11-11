import { TreeNode, getTreeNode } from "./TreeNode";

const node1 = getTreeNode([1, 3, 2, 5]);
const node2 = getTreeNode([2, 1, 3, null, 4, null, 7]);

function mergeTrees(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    // 将tree1返回
    root1.val += root2.val;
    console.log(root1.val);

    const left = mergeTrees(root1.left, root2.left);
    const right = mergeTrees(root1.right, root2.right);

    root1.left = left;
    root1.right = right;

    return root1;
}

console.log(mergeTrees(node1, node2));
