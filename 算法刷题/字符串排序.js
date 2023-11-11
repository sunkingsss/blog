const str = "A Famous Saying: Much Ado About Nothing (2012/8).";
// console.log(str.split(""));
function test(str) {
    const list = str.split("");
    for (let index = 0; index < list.length; index++) {
        for (let j = index + 1; j < list.length; j++) {
            const pre = list[index];
            const next = list[j];
            if (/[a-zA-Z]/.test(pre) && /[a-zA-Z]/.test(next) && pre.toLowerCase() > next.toLowerCase()) {
                const t = pre;
                list[index] = next;
                list[j] = t;
            }
        }
    }
    return list.join("");
}

console.log(test(str));

// console.log("a" < "c");
// console.log("z" < "A");
