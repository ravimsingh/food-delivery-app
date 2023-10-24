import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">This is namaste React Course</h1>;

const SecondComponent = () => <h2>this is second component</h2>;

const FunctionalComponents = () => {
  return (
    <div>
      {heading}
      <h1>This is a functional component</h1>
      <SecondComponent />
      {SecondComponent()}
      <SecondComponent></SecondComponent>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponents />);
