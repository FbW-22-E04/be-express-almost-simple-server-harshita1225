//server starter code

import express from "express";
const app = express();
const server = app.listen(4000, () =>
  console.log("SERVER is up and running!!")
);

//get request

app.get("/hello", (req, res) => {
  console.log("hello from path /hello");
  res.send(`Good morning ${process.argv[2]}!! Have a wonderful day`);
});

//get time request

app.get("/time", (req, res) => {
  console.log("hello from /time");
  res.send(new Date().toLocaleString());
});

//get  random request
let random = Math.floor(Math.random() * 100);
app.get("/random", (req, res) => {
  console.log("hello from /random");
  res.send(`Your lucky number is  ${random}`);
});

//get isnumber request (can be DIFFICULT for routing)

app.get("/isnumber/:value", (req, res) => {
  console.log("hello from /isnumber", req.params);

  if (isNaN(req.params.value)) {
    res.send(`CanNot be convereted to a number`);
  } else {
    res.send("Can be converetd to a number");
  }
});

//get isnumber request query

app.get("/isnumberquery", (req, res) => {
  console.log("hello from /isnumberquery", req.query);
  if (!isNaN(req.query.value)) {
    res.send(`It is a number`);
  } else {
    res.send("It cannot be convereted to a number");
  }
});
