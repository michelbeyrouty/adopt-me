const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt me!"),
    React.createElement(Pet, {
      name: "Ghost",
      breed: "Loulou",
      animal: "Dog",
    }),
    React.createElement(Pet, {
      name: "Winston",
      breed: "wofh3f",
      animal: "cat",
    }),
    React.createElement(Pet, {
      name: "Whity",
      breed: "cart",
      animal: "cat",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
