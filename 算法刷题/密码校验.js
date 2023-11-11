const str = "021Abc9Abc1";

function valide(str) {
    const vLength = str.length > 8;

    const vTypes = types(str) >= 3;

    const vRepeate = repeate(str);

    return vLength && vTypes && vRepeate;
}

function types(str) {
    let num = 0;
    if (/[a-z]/g.test(str)) {
        num++;
    }
    if (/[A-Z]/g.test(str)) {
        num++;
    }
    if (/\d/g.test(str)) {
        num++;
    }
    if (/\W/g.test(str)) {
        num++;
    }
    return num;
}

function repeate(str) {
    for (let index = 0; index < str.length; index++) {
        const s = str.slice(index, index + 3);
        for (let j = index + 3; j < str.length; j++) {
            const n = str.slice(j, j + 3);
            if (s === n) {
                return false;
            }
        }
    }
    return true;
}

console.log(valide(str));
