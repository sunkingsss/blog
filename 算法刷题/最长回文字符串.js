function longestPalindrome(s) {
    if (!s.length || s.length === 1) return s;
    const strList = s.split("");
    let maxStr = strList[0];
    for (let i = 0; i < s.length; i++) {
        if (strList[i] === strList[i + 1]) {
            // baab
            const str = calcLength(i, 2, strList);
            maxStr = str.length > maxStr.length ? str : maxStr;
        }
        if (strList.length >= 3 && i !== 0 && strList[i - 1] === strList[i + 1]) {
            //bab
            const str = calcLength(i, 1, strList);
            maxStr = str.length > maxStr.length ? str : maxStr;
        }
    }
    return maxStr;
}

function calcLength(index, divideLength, list) {
    if (divideLength === 1) {
        //bab
        let i = 1,
            str = list[index];
        while (index - i >= 0 && index + i < list.length) {
            if (list[index - i] !== list[index + i]) {
                break;
            }
            str = list[index - i] + str;
            str += list[index + i];
            i++;
        }
        return str;
    } else {
        //baab
        let i = 1,
            str = list[index] + list[index + 1];
        while (index - i >= 0 && index + i + 1 < list.length) {
            if (list[index - i] !== list[index + i + 1]) {
                break;
            }
            str = list[index - i] + str;
            str += list[index + i + 1];
            i++;
        }
        return str;
    }
}

console.log(longestPalindrome("caba"));
