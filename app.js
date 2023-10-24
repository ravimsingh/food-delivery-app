import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parrent" }, [
  React.createElement("div", { id: "children1", key: 6 }, [
    React.createElement("h1", { key: "1" }, "I am h1 tag"),
    React.createElement("h2", { key: "2" }, "I am h2 tag"),
  ]),
  ,
  React.createElement("div", { id: "children2", key: 3 }, [
    React.createElement("h1", { key: "1" }, "I am h1 tag"),
    React.createElement("h2", { key: "2" }, "I am h2 tag"),
  ]),
]);

// const heading = React.createElement("h1", {}, "I am h1 tag");

//console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
