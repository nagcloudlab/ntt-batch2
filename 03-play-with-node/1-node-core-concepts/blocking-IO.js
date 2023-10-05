const fs = require("node:fs");

const menu1Data = fs.readFileSync("./menu-1.txt", { encoding: "utf-8" }); // blocking IO
console.log(menu1Data);

const menu2Data = fs.readFileSync("./menu-2.txt", { encoding: "utf-8" }); // blocking IO
console.log(menu2Data);

console.log("Do Something Else");
