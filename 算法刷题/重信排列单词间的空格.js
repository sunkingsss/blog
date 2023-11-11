function reorderSpaces(text) {
    let spaces = 0,
        words = [],
        isAlphabet = false;
    while (text) {
        const alphabet = text.slice(0, 1);
        if (alphabet == " ") {
            isAlphabet = false;
            spaces += 1;
        } else {
            if (isAlphabet) {
                words[words.length - 1] += alphabet;
            } else {
                words.push(alphabet);
            }
            isAlphabet = true;
        }
        text = text.slice(1);
    }
    const spaceGap = Math.floor(spaces / Math.max(1, words.length - 1));
    return words.reduce((pre, cur, curIndex) => {
        // const num = (curIndex + 1) * spaceGap != spaces ? spaces - curIndex * spaceGap : spaceGap;
        const num = curIndex == words.length - 1 ? spaces - curIndex * spaceGap : spaceGap;
        const paragraph = cur + "-".repeat(num);
        return (pre += paragraph);
    }, "");
}

console.log(reorderSpaces("a b   c d"));
