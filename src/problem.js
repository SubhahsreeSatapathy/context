import React, { useState } from "react";

const GrandChild = (props) => {
  return (
    <>
      <Child brand={props.brand} />

      <h3>Grand Child :</h3>
    </>
  );
};

const Child = (props) => {
  return (
    <>
      <h2>Child :{props.brand}</h2>
    </>
  );
};

const App = () => {
  const [brandName] = useState("Amazon");
  return (
    <>
      <h1>Hello</h1>
      <GrandChild brand={brandName} />
    </>
  );
};
export default App;
