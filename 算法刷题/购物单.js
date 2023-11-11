const N = 1000,
    m = 5,
    list = [
        {
            v: 800,
            p: 2,
            q: 0
        },
        {
            v: 400,
            p: 5,
            q: 1
        },
        {
            v: 300,
            p: 5,
            q: 1
        },
        {
            v: 400,
            p: 3,
            q: 0
        },
        {
            v: 500,
            p: 2,
            q: 0
        }
    ];

let max = 0;

function statistics() {
    list.forEach((v, i) => {
        v.t = v.v * v.p;
        v.i = i + 1;
    });

    list.sort((a, b) => a.t - b.t).reverse();

    console.log(list);

    for (let index = 0; index < list.length; index++) {
        max = Math.max(find(index), max);
    }
}

/**
 *
 * @param {*} index 从第几个元素开始查找
 */
function find(index) {
    // 已查找元素
    let arr = [],
        t = 0,
        c = 0;
    // while() {

    // }
}

statistics();
