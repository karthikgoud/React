// 1 method : traditional

import React from "react";

// function Play() {
//     return <h2>JSX here function</h2>;
// }

const Play = (props) => {
  return (
    <div>
      <h2>JSX here</h2>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Play;
