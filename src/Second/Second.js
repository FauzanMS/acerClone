import React from 'react'
import './Second.css'
import fan from '../Second/secondImage.png';
export default function Second() {
    return (
        <div className="Second">
        <img alt="hi"
          src={fan}
          className="fans"
        />
        <h1 className="earthion">Earthion</h1>
        <p className="earthLine" >A mission to earth</p >
        <div className="acerBtnWhite">Learn More</div>
      </div>
    )
}
