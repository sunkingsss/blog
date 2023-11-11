function findConsecutiveBits(target, bits) {
    let max = 0,
        pre = 0,
        cur = 0;
    for (let i = 0; i < bits.length; i++) {
        if (bits[i] === target) {
            cur++;
            if (bits[i - 2] === target && bits[i - 1] !== target) {
                pre++;
            }
            max = Math.max(max, cur + pre);
        } else {
            pre = Math.max(cur, 1);
            cur = 0;
        }
    }
    return max;
}

//
console.log(findConsecutiveBits(1, [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0]));
