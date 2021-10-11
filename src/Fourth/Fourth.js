import React from "react";
import "./Fourth.css";
import c1 from "../Fourth/Card/nitro7.png";
import c2 from "../Fourth/Card/orion.png";
import c3 from "../Fourth/Card/swift5.png";
import c4 from "../Fourth/Card/titron.png";
export default function Fourth() {
  return (
    <div className="fourthTable">
      <div>
        <img alt="hi" className="cardFourth" src={c1} />
        <p className="cardHead">Nitro 7</p>
      </div>
      <div>
        <img alt="hi" className="cardFourth" src={c2} />
        <p className="cardHead">Predator Triton 500</p>
      </div>
      <div>
        <img alt="hi" className="cardFourth" src={c3} />
        <p className="cardHead">Predator Orion 9000</p>
      </div>
      <div>
        <img alt="hi" className="cardFourth" src={c4} />
        <p className="cardHead">Swift 5</p>
      </div>
    </div>
  );
}
