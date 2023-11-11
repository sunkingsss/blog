function findSubsequences(nums) {
    let result = [],
        path = [];
    const backTracking = function (startIndex) {
        if (path.length >= 2) {
            result.push(path.slice());
        }

        if (startIndex === nums.length) {
            return;
        }

        let frontNums = [];
        for (let i = startIndex; i < nums.length; i++) {
            // 剪枝
            if (path[path.length - 1] > nums[i] || frontNums.includes(nums[i])) {
                continue;
            }
            frontNums.push(nums[i]);
            path.push(nums[i]);
            backTracking(i + 1);
            path.pop();
        }
    };

    backTracking(0);

    return result;
}

console.log(findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]));
