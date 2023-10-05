const http = require("node:http");

const httpServer = http.createServer(); // EventEmitter

httpServer.on("request", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World\n");
});

httpServer.listen(8080, () => {
  console.log("listening on *:8080");
});
