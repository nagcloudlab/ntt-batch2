// const fs = require("node:fs");
const fs = require("node:fs/promises");

// const callback = function (err, data) {
//   if (err) throw err;
//   console.log(data);
// };

// fs.readFile("./menu-1.txt", "utf-8", callback);
// fs.readFile("./menu-2.txt", "utf-8", callback);
// console.log("Do Something Else");

// fs.readFile("./menu-1.txt", { encoding: "utf-8" }, (err, menu1Data) => {
//   if (err) throw err;
//   fs.readFile("./menu-2.txt", { encoding: "utf-8" }, (err, menu2Data) => {
//     if (err) throw err;
//     console.log(menu1Data);
//     console.log(menu2Data);
//   });
// });

async function readMenu1AndMenu2() {
  try {
    let menu1Data = await fs.readFile("./menu-1.txt", { encoding: "utf-8" });
    let menu2Data = await fs.readFile("./menu-2.txt", { encoding: "utf-8" });
    console.log(menu1Data);
    console.log(menu2Data);
  } catch (err) {
    console.log(err);
  }
}

readMenu1AndMenu2();

console.log("Do Something Else");
