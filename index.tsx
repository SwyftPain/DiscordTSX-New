import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { JSDOM } from "jsdom";

// create a new JSDOM environment
const dom = new JSDOM(
  '<!DOCTYPE html><html><body><div id="root"></div></body></html>',
  {
    url: "http://localhost",
  }
);

// set the global objects
(global as any).window = dom.window;
(global as any).document = dom.window.document;
(global as any).navigator = dom.window.navigator;

// render the app
ReactDOM.render(<App/>, document.getElementById("root"));
