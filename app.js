console.log("Hello World!");

const fs = require("fs");
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(
  "file.txt",
  "Hi I'm writing to a file",
  "utf8",
  function (err, data) {
    if (err) throw err;
    console.log("File has been written");
  },
);

const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World !!!!");
    res.end();
  })
  .listen(8080);
