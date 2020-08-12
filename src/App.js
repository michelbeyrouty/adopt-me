import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";

const App = () => {

  return (
    <div>
      <h1 id="someting-important">Adopt me</h1>
      <SearchParams/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
