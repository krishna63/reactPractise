import express from "express";
const app = express();
const port = 5999;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to react 19 back end server!");
});

app.get("/saveUserName", (req, res) => {
  const data = {
    userNameInBE: capitalizeFirstLetter(req.query.uName),
    data: [1, 2, 3],
  };
  res.writeHead(200, { "Content-Type": "application/json" });
  setTimeout(() => {
    res.end(JSON.stringify(data));
  }, 1000);
});

const messageList = ["First Message", "Second Message", "Third Message"];
app.get("/getMessageList", (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(messageList));
});

app.post("/updateMessageList", (req, res) => {
  const { addNewMessage } = req.body;
  console.log(`user is asking to add ${addNewMessage}`);
  res.writeHead(200, { "Content-Type": "application/json" });
  messageList.push(
    `${capitalizeFirstLetter(
      addNewMessage
    )} - Message updated in backend as well!!!`
  );
  res.end(JSON.stringify(messageList));
});

app.listen(port, () => {
  console.log(`React back end server is running on:: ${port}`);
});
