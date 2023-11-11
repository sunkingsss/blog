import { TreeNode, getTreeNode } from "./TreeNode";

const node = getTreeNode([4, 2, 6, 1, 3]);

function inorderTraverse(root: TreeNode | null) {
    if (root === null) return;

    inorderTraverse(root.left);

    inorderTraverse(root.right);
}

inorderTraverse(node);
