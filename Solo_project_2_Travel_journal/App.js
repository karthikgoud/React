import React from "react";
import Header from "./component/Header";
import Card from "./component/Card";
import data from "./data";

export default function App() {
  let cardProp = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{cardProp}</main>
    </div>
  );
}
