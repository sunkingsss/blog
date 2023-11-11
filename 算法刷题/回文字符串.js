//a man a plan a c a nalp a nam a
const inputStr = "0P";

function isPalindrome(s) {
    const resStr = handleStr(s);
    if (resStr.length % 2 === 0) {
        return resStr.slice(0, resStr.length / 2) === reverse(resStr.slice(resStr.length / 2));
    } else {
        return resStr.slice(0, (resStr.length - 1) / 2) === reverse(resStr.slice((resStr.length + 1) / 2));
    }
}

function handleStr(s) {
    return s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function reverse(s) {
    return s.split("").reverse().join("");
}

console.log(isPalindrome(inputStr));
