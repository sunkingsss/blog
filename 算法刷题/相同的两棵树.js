function isSameTree(p, q) {
    if ((q && !p) || (!q && p) || (q && p && q.val !== p.val)) return false;
    if (!q && !p) return true;
    const ret_left = isSameTree(p.left, q.left);
    if (!ret_left) return false;
    const ret_right = isSameTree(p.right, q.right);
    if (!ret_right) return false;
}

const n1 = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3
    }
};

const n2 = {
    val: 1,
    left: {
        val: 2
    },
    right: {
        val: 3
    }
};

console.log(isSameTree(n1, n2));
