import React from "react";
import "./First.css";
export default function First() {
  return (
    <div className="First">
      <img alt="hi"
        src="https://static.acer.com/up/Resource/Acer/Events/nextatacer-20211013/20210913/next_acer_black.svg"
        className="nextacer"
      />
      <p>Global Press Conference 2021</p>
      <h1 className="madehuman">made for humanity</h1>

        <p className="timingHead">See you on October 13.</p>
        <p className="list">New York 9 AM (UTC-4)</p>
       <p className="list"> Berlin 3 PM (UTC+2)</p> <p className="list">Taipei 9 PM (UTC+8)</p>
      <div className="acerBtn">Explore</div>
    </div>
  );
}
