function partition(s) {
    let result = [],
        path = [];
    const backTracking = function (startIndex) {
        if (startIndex === s.length) {
            result.push(path.slice());
        }

        for (let i = startIndex; i < s.length; i++) {
            const fragment = s.slice(startIndex, i + 1);
            if (isPalindrome(fragment)) {
                path.push(fragment);
            } else {
                continue;
            }

            backTracking(i + 1);
            path.pop();
        }
    };
    const isPalindrome = function (s) {
        const list = s.split("");
        let left = 0,
            right = list.length - 1;
        while (left <= right) {
            if (left !== right && list[left] !== list[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    };

    backTracking(0);

    return result;
}

console.log(partition("aab"));
