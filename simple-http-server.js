const http = require("http");

const host = "localhost";
const port = 8124;

http
  .createServer((req, res) => {
    res.writeHead(200, "OK", { "Content-Type": "text/plain" });
    res.end("Hello World!\n");
  })
  .listen(port, host);

console.log("Server running at http://" + host + ":" + port);
