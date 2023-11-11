// 这个应该是别人希望我做的
function Fibonacci(n) {
    if (n <= 0) {
        return n;
    }
    let dp = [];
    for (let index = 0; index < n; index++) {
        dp[index] = -1;
    }
    return fib(n, dp);
}

function fib(n, dp) {
    if (dp[n] != -1) {
        return dp[n];
    }
    if (n <= 2) {
        dp[n] = 1;
    } else {
        dp[n] = fib(n - 1, dp) + fib(n - 2, dp);
    }
    return dp[n];
}

// 这个是我自己想出来的
let dp = [0, 1];
function fib2(n) {
    if (n < 2 || dp[n]) return dp[n];
    for (let index = dp.length; index <= n; index++) {
        dp.push(dp[n - 2] + dp[n - 1]);
    }
    return dp[n];
}

for (let index = 0; index < 10; index++) {
    console.log(fib2(index));
}
