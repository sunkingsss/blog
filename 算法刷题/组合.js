function combine(n, k) {
    // 回溯
    let result = [],
        path = [];

    const backTreeing = function (n, k, startIndex) {
        if (path.length === k) {
            result.push(path.slice());
            return;
        }

        for (let i = startIndex; i <= n; i++) {
            path.push(i);
            backTreeing(n, k, i + 1);
            path.pop();
        }
    };

    backTreeing(n, k, 1);

    return result;
}

console.log(combine(4, 2));
