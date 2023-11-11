const ip = "10.0.3.193";
const list = ip.split(".");

console.log(list);

const uint8 = new Uint8Array(list);

console.log(uint8);
