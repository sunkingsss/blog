const arr = [186, 186, 150, 200, 160, 130, 197, 200];

function handle(arr) {
    const dp = [];
    for (let i = 0; i < arr.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            if (arr[j] < arr[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    return dp;
}

console.log(handle(arr));
