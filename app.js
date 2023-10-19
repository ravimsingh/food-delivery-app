/**
 * <div id="parrent">
 *  <div id="children">
 *  <h1>I am h1 tag</h1>
 *  </div>
 * <div id="children2">
 *  <h1>I am h1 tag</h1>
 *  </div>
 * </div>
 *
 */

const parent = React.createElement("div", { id: "parrent" }, [
  React.createElement("div", { id: "children1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  ,
  React.createElement("div", { id: "children2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

// const heading = React.createElement("h1", {}, "I am h1 tag");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
