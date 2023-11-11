function restoreIpAddresses(s) {
    let result = [],
        path = [];

    const isValide = function (val) {
        if (val.length > 1) {
            return Number(val) <= 255 && val[0] !== "0";
        }
        return true;
    };

    const backTracking = function (startIndex) {
        if (startIndex === s.length && path.length === 4) {
            result.push(path.slice());
            return;
        }
        if (path.length >= 4) {
            return;
        }

        for (let i = startIndex; i < s.length; i++) {
            const slice = s.slice(startIndex, i + 1);
            // console.log(slice);
            if (!isValide(slice) || path.length >= 4) {
                return;
            }
            path.push(slice);
            backTracking(i + 1);
            path.pop();
        }
    };

    backTracking(0);

    return result;
}

// console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("1234"));
