function minSubArrayLen(target, nums) {
    let start = 0,
        sum = 0,
        min = nums.length;
    for (let last = 0; last < nums.length; last++) {
        sum += nums[last];

        if (sum >= target) {
            while (sum >= target) {
                if (sum - nums[start] < target) {
                    break;
                }
                sum -= nums[start];
                start++;
            }
            min = Math.min(min, last - start + 1);
        }
    }
    return min;
}

console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
