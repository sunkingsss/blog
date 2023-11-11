function isSymmetric(root) {
    if (!root) return true;
    function isSameNode(q, p) {
        if (!q && !p) return true;
        if ((!q && p) || (q && !p) || q.val !== p.val) return false;
        const ret_l = isSameNode(p.left, q.right);
        if (!ret_l) return false;
        const ret_r = isSameNode(p.right, q.left);
        if (!ret_r) return false;
        return true;
    }
    return isSameNode(root.left, root.right);
}
