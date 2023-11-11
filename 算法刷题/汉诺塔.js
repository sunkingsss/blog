function hanota(A, B, C) {
    function move(n, A, B, C) {
        if (n === 1) {
            C.push(A.pop());
        } else {
            // n-1 A挪到B
            move(n - 1, A, C, B);
            // n A挪到C
            C.push(A.pop());
            // n-1 B挪到C
            move(n - 1, B, A, C);
        }
    }
    move(A.length, A, B, C);
}

hanota([3, 2, 1, 0], [], []);
