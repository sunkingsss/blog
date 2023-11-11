const str = "3+2*{1+2*[-4/(8-6)+7]}";

const newStr = str.replace(/(\{|\}|\[|\])/g, v => {
    if (v === "{" || v === "[") {
        return "(";
    } else {
        return ")";
    }
});

// console.log(newStr);
new Function(`console.log(${newStr})`)();
