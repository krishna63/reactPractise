import express from "express";
import { readFile } from "node:fs";
import path from "node:path";
import React, { useState, useEffect } from "react";
import { renderToPipeableStream } from "react-dom/server";

export const CustomButton = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count++);
  };

  const handleDecrement = () => {
    setCount(count);
  };
  return (
    <>
      <p>Value of Count is :: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </>
  );
};

export function App() {
  return (
    <html>
      <head>
        <title>SSR components</title>
      </head>
      <body>
        <div id="server-root"></div>
        <>
          <h2>I am a h2 node render at the server</h2>
          <CustomButton />
        </>
      </body>
    </html>
  );
}

const app = express();
const port = 6010;
const currentDirectory = process.cwd();

app.get("/", (req, res) => {
  res.send("welcome to react server components");
});

app.get("/serverComponent", (req, response) => {
  const { pipe } = renderToPipeableStream(<App />, {
    bootstrapScripts: ["dist/client.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      pipe(response);
    },
  });
});

app.listen(port, () => {
  console.log(`React back end server is running on:: ${port}`);
});

app.use(express.static("dist"));
