function asteroidCollision(asteroids) {
    let stack = [];
    while (asteroids.length) {
        let cur = asteroids.shift();
        // + => 右
        // - <= 左

        // + + / + - / - + / - -/
        if (cur < 0) {
            while (stack.length) {
                let pre = stack.pop();
                if (pre > 0) {
                    if (pre > Math.abs(cur)) {
                        stack.push(pre);
                        cur = null;
                        break;
                    } else if (pre === Math.abs(cur)) {
                        cur = null;
                        break;
                    }
                } else {
                    stack.push(pre);
                    stack.push(cur);
                    cur = null;
                    break;
                }
            }
            if (cur !== null) {
                stack.push(cur);
            }
        } else {
            stack.push(cur);
        }
    }
    return stack;
}

console.log(asteroidCollision([-2, -1, 1, 2]));
