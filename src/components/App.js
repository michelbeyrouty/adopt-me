import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import { Details } from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1 id="someting-important">Adopt me</h1>
        <Router>
          <SearchParams path="/" />
          <Details path="/details//:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
