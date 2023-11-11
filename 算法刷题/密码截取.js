/**
 * 查找最大回文长度
 */
const line = "12HHHHA";

const dp = [];
let max = 0;

for (let i = 0; i < line.length; i++) {
    dp[i] = 1;
    for (let j = 0; j <= i; j++) {
        let str = line.slice(j, i + 1);
        if (check(str)) {
            dp[i] = Math.max(dp[i], str.length);
            max = Math.max(max, dp[i]);
        }
    }
}

console.log(max);

function check(str) {
    let i, j;
    if (str.length % 2 === 0) {
        i = str.length / 2 - 1;
        j = str.length / 2;
    } else {
        i = (str.length - 1) / 2;
        j = i;
    }
    while (i >= 0 && j < str.length) {
        if (str[i] === str[j]) {
            i--;
            j++;
        } else {
            return false;
        }
    }
    return true;
}
