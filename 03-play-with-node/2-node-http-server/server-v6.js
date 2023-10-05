const cluster = require("node:cluster");
const http = require("node:http");
const numCPUs = require("node:os").availableParallelism();
const process = require("node:process");

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      console.log(`Worker ${process.pid} handling HTTP request`);
      res.end("hello world\n " + process.pid);
    })
    .listen(8080);

  console.log(`Worker ${process.pid} started`);
}
