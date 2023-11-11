function inorderTraversal(root) {
    let arr = [];
    function travelNode(node) {
        if (!node) {
            return;
        }
        travelNode(node.left);
        arr.push(node.val);
        travelNode(node.right);
    }
    travelNode(root);
    return arr;
}

const node = {
    val: 1,
    left: null,
    right: {
        val: 2,
        left: {
            val: 3
        },
        right: null
    }
};

console.log(inorderTraversal(node));
