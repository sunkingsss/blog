function generateParenthesis(n) {
    let res = [];
    function dfs(path, left, right) {
        // 剪枝
        if (left > n || right > left) return;
        if (path.length === n * 2) {
            res.push(path);
            return;
        }
        dfs(path + "(", left + 1, right);
        dfs(path + ")", left, right + 1);
    }
    dfs("", 0, 0);
    return res;
}

console.log(generateParenthesis(2));
