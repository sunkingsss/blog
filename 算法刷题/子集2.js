function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    let result = [],
        path = [],
        used = new Array(nums.length).fill(false);

    const backTracking = function (startIndex) {
        // 收集
        result.push(path.slice());

        if (startIndex === nums.length) {
            return;
        }

        for (let i = startIndex; i < nums.length; i++) {
            // 剪枝
            if (nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }

            path.push(nums[i]);
            used[i] = true;
            backTracking(i + 1);
            path.pop();
            used[i] = false;
        }
    };

    backTracking(0);

    return result;
}

console.log(subsetsWithDup([1, 2, 2]));
