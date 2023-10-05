const http = require("node:http");
const fs = require("node:fs");

const httpServer = http.createServer(); // EventEmitter
let reqCount = 0;
httpServer.on("request", (req, res) => {
  reqCount++;
  console.log("request-count:" + reqCount + " : started computation");
  res.writeHead(200, { "Content-Type": "text/plain" });
  let i = 10;
  while (i < 100000000) {
    i++;
  }
  console.log("request-count:" + reqCount + " : finished computation");
  res.end("computation result");
});

httpServer.listen(8080, () => {
  console.log("listening on *:8080");
});
