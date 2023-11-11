function cutDp(p) {
    let r = [];
    for (let i = 0; i <= p.length; i++) r[i] = -1;
    return cut(p, p.length, r);
}

function cut(p, n, r) {
    let q = -1;
    if (r[n] >= 0) {
        return r[n];
    }
    if ((n = 0)) {
        q = 0;
    } else {
        for (let index = 0; index <= n; index++) {
            q = Math.max(q, cut(p, n - i, r) + p[i - 1]);
        }
    }
    r[n] = q;
    return q;
}
