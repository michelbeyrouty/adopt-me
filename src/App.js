import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt me!"),
  //   React.createElement(Pet, {
  //     name: "Ghost",
  //     breed: "Loulou",
  //     animal: "Dog",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Winston",
  //     breed: "wofh3f",
  //     animal: "cat",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Whity",
  //     breed: "cart",
  //     animal: "cat",
  //   }),
  // ]);

  return (
    <div>
      <h1 id="someting-important">Adopt me</h1>
      <Pet name="Ghost" animal="dog" breed="loulou" />
      <Pet name="Shadow" animal="bird" breed="hawk" />
      <Pet name="Winston" animal="cat" breed="mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
