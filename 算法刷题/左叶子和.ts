import { TreeNode, getTreeNode } from "./TreeNode";

const node = getTreeNode([-9, -3, 2, null, 4, 4, 0, -6, null, -5]);
console.log(node);

function sumOfLeftLeaves(root: TreeNode): number {
    // 后续遍历
    /**
     * 1.确定终止条件
     * 2.确定返回值
     * 3.单个递归逻辑
     */

    // 确定终止条件  ->    右结点终止
    if (!root.left && !root.right) return 0;

    let left = 0,
        right = 0;
    if (root.left) {
        if (!root.left.left && !root.left.right) {
            left = root.left.val;
        } else {
            if (root.left.left) {
                left = sumOfLeftLeaves(root.left);
            }
            if (root.right) {
                right = sumOfLeftLeaves(root.right);
            }
        }
    }

    if (root.right) {
        right = sumOfLeftLeaves(root.right);
    }

    return left + right;
}

console.log(sumOfLeftLeaves(node));
