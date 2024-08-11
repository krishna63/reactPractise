import { hydrateRoot } from "react-dom/client";
import { App } from "./App.server.js";

const domNode = document.getElementById("server-root");
const root = hydrateRoot(domNode, <App />);
