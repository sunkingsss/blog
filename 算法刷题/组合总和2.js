function combinationSum2(candidates, target) {
    // 去重：树层去重（非叶子节点去重）  树枝去重（叶子节点去重）
    candidates.sort((a, b) => a - b);
    let used = new Array(candidates.length).fill(false);
    let result = [];
    let path = [];

    const backTracking = function (sum, target, startIndex) {
        if (sum === target) {
            result.push(path.slice());
        }

        for (let i = startIndex; i < candidates.length; i++) {
            //1,1,2,5,6,7,10
            /**
             * 剪枝 重复的元素必相邻
             * 当前元素与前一个元素相等
             * 保证
             */
            if (candidates[i] === candidates[i - 1] && used[i - 1] === false) {
                // console.log(candidates[i], candidates[i - 1]);
                console.log(i, i - 1);
                continue;
            }
            sum += candidates[i];
            path.push(candidates[i]);
            used[i] = true;
            backTracking(sum, target, i + 1);
            path.pop();
            sum -= candidates[i];
            used[i] = false;
        }
    };

    backTracking(0, target, 0);

    return result;
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
