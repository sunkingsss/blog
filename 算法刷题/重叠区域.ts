function merge(intervals: number[][]): number[][] {
    // 返回一段不重叠区间的所有数组
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let newIntervals = [intervals[0]];
    for (let interval of intervals) {
        let nl = newIntervals[newIntervals.length - 1];
        if (interval[0] === nl[0]) {
            nl[1] = Math.max(interval[1], nl[1]);
        } else {
            if (interval[0] > nl[1]) {
                newIntervals.push(interval);
            } else {
                nl[1] = Math.max(interval[1], nl[1]);
            }
        }
    }
    return newIntervals;
}

console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18]
    ])
);
