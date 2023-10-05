const http = require("node:http");
const fs = require("node:fs");

const httpServer = http.createServer(); // EventEmitter
let reqCount = 0;
httpServer.on("request", (req, res) => {
  reqCount++;
  console.log("request-count:" + reqCount + " : started IO");
  res.writeHead(200, { "Content-Type": "application/pdf" });
  const pdfData = fs.readFileSync("./PPT/all-levels node.pdf");
  res.end(pdfData);
  console.log("request-count:" + reqCount + " : finished IO");
});

httpServer.listen(8080, () => {
  console.log("listening on *:8080");
});
