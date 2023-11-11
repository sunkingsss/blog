// const n = readline();
// const mList = readline()
//   .split(" ")
//   .map((v) => Number(v));
// const xList = readline()
//   .split(" ")
//   .map((v) => Number(v));
const n = 2;
const mList = [1, 2];
const xList = [2, 1];

let set = new Set();

function calculate() {
    for (let i = 0; i < n; i++) {
        let arr = [];
        for (let j = 0; j <= xList[i]; j++) {
            if (set.size) {
                // for (const v of set) {
                //     arr.push(v + j * mList[i]);
                // }
                set.forEach(v => {
                    arr.push(v + j * mList[i]);
                });
            } else {
                arr.push(j * mList[i]);
            }
        }
        console.log(arr);
        // set.add(...arr);
        arr.forEach(v => {
            set.add(v);
        });
    }
    console.log(set.size);
}

calculate();
