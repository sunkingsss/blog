import { TreeNode, getTreeNode } from "./TreeNode";

const node = getTreeNode([0, null, -1]);
// let preMax = null;

// function isValidBST(root: TreeNode | null): boolean {
//     // 中序遍历
//     if (!root) return true;

//     const left = isValidBST(root.left);

//     if (preMax || root.val > preMax) {
//         G = root.val;
//     } else {
//         return false;
//     }

//     const right = isValidBST(root.right);

//     return left && right;
// }

function isValidBST(root: TreeNode | null): boolean {
    let preMax = null;
    function inorderTraverse(node: TreeNode | null): boolean {
        // 中序遍历
        if (!node) return true;

        const left = inorderTraverse(node.left);

        if (preMax === null || node.val > preMax) {
            preMax = node.val;
        } else {
            return false;
        }

        const right = inorderTraverse(node.right);

        return left && right;
    }

    return inorderTraverse(root);
}

console.log(isValidBST(node));
