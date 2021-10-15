/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { FoodDiv, SidesDiv, DrinkDiv, MyNav, Footer} from "./component";

function App() {
  return (
    <section className="orderPair">
      <MyNav/>
      <FoodDiv />
      <SidesDiv />
      <DrinkDiv />
      <Footer/>
    </section>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));


