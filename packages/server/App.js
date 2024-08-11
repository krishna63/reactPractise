import express from "express";
import { readFile } from "node:fs";
import path from "node:path";
import React, { useState, useEffect } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
export const CustomButton = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count++);
  };
  const handleDecrement = () => {
    setCount(count);
  };
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsxs("p", {
      children: ["Value of Count is :: ", count]
    }), /*#__PURE__*/_jsx("button", {
      onClick: handleIncrement,
      children: "Increment"
    }), /*#__PURE__*/_jsx("button", {
      onClick: handleDecrement,
      children: "decrement"
    })]
  });
};
export function App() {
  return /*#__PURE__*/_jsxs("html", {
    children: [/*#__PURE__*/_jsx("head", {
      children: /*#__PURE__*/_jsx("title", {
        children: "SSR components"
      })
    }), /*#__PURE__*/_jsxs("body", {
      children: [/*#__PURE__*/_jsx("div", {
        id: "server-root"
      }), /*#__PURE__*/_jsxs(_Fragment, {
        children: [/*#__PURE__*/_jsx("h2", {
          children: "I am a h2 node render at the server"
        }), /*#__PURE__*/_jsx(CustomButton, {})]
      })]
    })]
  });
}
const app = express();
const port = 6010;
const currentDirectory = process.cwd();
app.get("/", (req, res) => {
  res.send("welcome to react server components");
});
app.get("/serverComponent", (req, response) => {
  const {
    pipe
  } = renderToPipeableStream( /*#__PURE__*/_jsx(App, {}), {
    bootstrapScripts: ["/client.js"],
    onShellReady() {
      response.setHeader("content-type", "text/html");
      pipe(response);
    }
  });
});
app.listen(port, () => {
  console.log(`React back end server is running on:: ${port}`);
});
app.use(express.static("dist"));
