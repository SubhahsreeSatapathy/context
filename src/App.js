import React,{Fragment} from "react";
import Context from "./context";
import Provider from "./provider";

const Agents=()=>{
   return <AgentOne />
}
const AgentOne=()=>{
   return <AgentTwo />
}
const AgentTwo=()=>{
   return <AgentBond />
}
const AgentBond=()=>{
  return(
    <Context.Consumer>
      {
        (context)=>(
         <Fragment>
           <h3>Information</h3>
           <p>{context.data.name}</p>
           <h2>{context.data.accept}</h2>
           <button onClick={context.isAccepted}>Choose to accept</button>
         </Fragment>
        )
      }
    </Context.Consumer>
  )
}

const App = () => {
  return (
    <>
      <h1>Hello</h1>
      <Provider>
        <Agents />
      </Provider>
    </>
  );
};
export default App;

// import React, { useState } from "react";

// const GrandChild = (props) => {
//   return (
//     <>
//       <Child brand={props.brand} />

//       <h3>Grand Child :</h3>
//     </>
//   );
// };

// const Child = (props) => {
//   return (
//     <>
//       <h2>Child :{props.brand}</h2>
//     </>
//   );
// };

// const App = () => {
//   const [brandName] = useState("Amazon");
//   return (
//     <>
//       <h1>Hello</h1>
//       <GrandChild brand={brandName} />
//     </>
//   );
// };
// export default App;
