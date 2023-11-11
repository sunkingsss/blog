export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export function getTreeNode(arr: Array<number | null>): TreeNode {
    // 每次从首部弹出两个元素
    const root = new TreeNode(arr.shift());

    const queueNodes = [root];
    while (arr.length) {
        const childs = arr.splice(0, 2);
        const cur = queueNodes.shift();

        if (childs[0] !== null) {
            const left = new TreeNode(childs[0]);
            cur.left = left;

            queueNodes.push(left);
        }
        if (childs[1] !== null) {
            const right = new TreeNode(childs[1]);
            cur.right = right;

            queueNodes.push(right);
        }
    }

    return root;
}
