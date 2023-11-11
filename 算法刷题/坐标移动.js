const str = ";A10;S20;W10;D30;X;A1A;B10A11;;A10;";

const reg = /(?<=;)[AWSD](\d+)(?=;)/g;

const list = str.match(reg);

let x = 0,
    y = 0;
list.forEach(v => {
    const char = v.slice(0, 1);
    const value = Number(v.slice(1));
    if (char === "A") {
        x -= value;
    } else if (char === "W") {
        y += value;
    } else if (char === "D") {
        x += value;
    } else {
        y -= value;
    }
});

console.log(x, y);
