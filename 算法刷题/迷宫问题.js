const maze = [
        [0, 1, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 1, 0]
    ],
    m = 5,
    n = 5;
/**
 * 从左上角输出到右下脚的路径
 * 输入迷宫
 * 输出路径
 */
let routeSet = new Set();
function dfs(x, y) {
    const node = `(${x},${y})`;
    /**
     * 1.当前为1
     * 2.节点超出迷宫
     * 3.已遍历过的节点
     */
    // console.log(node);
    if (x > 4 || x < 0 || y < 0 || y > 4 || maze[x][y] === 1 || routeSet.has(node)) return;
    console.log(node);
    routeSet.add(node);
    // 优先右边，再下边，再左边，最后上边 回退
    dfs(x, y + 1);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x - 1, y);
}

dfs(0, 0);
