import React from "react";

// function Greet(props) {
//   console.log(props);
//   return <h1>Hello {props.name}</h1>;
// }

using arrow function
const Greet = (props) => {
  return (
    <div>
      <h1>
        {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
