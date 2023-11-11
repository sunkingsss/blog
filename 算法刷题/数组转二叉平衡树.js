class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}
function sortedArrayToBST(nums) {
    function traverse(nums, left, right) {
        if (left > right) return null;
        console.log(left, right);
        const midIndex = (left + right) >> 1;
        const mid = nums[midIndex];
        const node = new TreeNode(mid);

        node.left = traverse(nums, left, mid - 1);
        node.right = traverse(nums, mid + 1, right);

        return node;
    }

    const root = traverse(nums, 0, nums.length - 1);

    return root;
}
