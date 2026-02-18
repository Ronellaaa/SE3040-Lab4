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

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("Hello World !!!!");
//     res.end();
//   })
//   .listen(8080);

// const https = require("https");
// https
//   .get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
//     let data = "";
//     res.on("data", (chunck) => {
//       data += chunck;
//     });
//     res.on("end", () => {
//       console.log(JSON.parse(data));
//     });
//   })
//   .on("error", (err) => {
//     console.log("Error: " + err.message);
//   });

// const myModule = require("./my-module");
// console.log(myModule.myModule());

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
