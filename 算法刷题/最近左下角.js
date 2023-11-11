const node = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        }
    },
    right: {
        val: 3,
        left: {
            val: 5,
            left: {
                val: 7
            }
        },
        right: {
            val: 6
        }
    }
};

function findBottomLeftValue(root) {
    let maxDepth = 0,
        val = 0;

    function traversal(node, depth) {
        if (!node.left && !node.right) {
            if (depth > maxDepth) {
                maxDepth = depth;
                val = node.val;
            }
        }
        if (node.left) {
            depth++;
            traversal(node.left, depth);
            depth--;
        }

        if (node.right) {
            depth++;
            traversal(node.right, depth);
            depth--;
        }
    }
    traversal(root, maxDepth);
    return val;
}

console.log(findBottomLeftValue(node));
