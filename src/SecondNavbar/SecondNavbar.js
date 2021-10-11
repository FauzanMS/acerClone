import React , {useEffect, useState} from "react";
import "./SecondNavbar.css";
export default function SecondNavbar() {
    const [navOn , setNavOn] = useState(false);
    const [style , setStyle] = useState({transform:"translateX(-400vh)" , display:"block"});
    const [styleHam1 , setStyleHam1] = useState();
    const [styleHam2 , setStyleHam2] = useState();
    const [styleHam3 , setStyleHam3] = useState();

    useEffect(()=>{
     if(navOn){
     setStyle({transform:"translateX(-10vh)" , display:"block"});
    setStyleHam1({transform:"rotateZ(45deg)"})
    setStyleHam2({transform:"rotateZ(-45deg)" , marginTop : "-15%"})
    setStyleHam3({display:"none"});
    
     }
     else{
     setStyle({transform:"translateX(-400vh)" , display:"block"});
     setStyleHam1({transform:"rotateZ(0deg)"})
    setStyleHam2({transform:"rotateZ(0deg)" , marginTop : "0%" });
    setStyleHam3({display:"block"});


     }
    },[navOn])
  return (
    <div className="navbar">
      <nav>
        <div className="secondNavbar">
          <img alt="hi"
            src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Acer-Logo_2011.png"
            className="acerLogo"
          />
          <ul className="secondsecond">
            <li>STORE</li>
            <li>FOR HOME</li>
            <li>FOR WORK</li>
            <li>SUPPORT</li>
          </ul>
          <ul>
            <li><img alt="hi" src="https://as1.ftcdn.net/v2/jpg/01/27/72/28/500_F_127722883_DD4Sp3V30YxvYut3sRsaJqv7TKloEuyH.jpg" className="Search"></img></li>
          </ul>
          <div className="hamburger" onClick={()=>{setNavOn(!navOn)}}>
            <div className="ham1" style={styleHam1}></div>
            <div className="ham2" style={styleHam2}></div>
            <div className="ham3" style={styleHam3}></div>

        </div>
        </div>
      </nav>
      <div >
      <ul className="secondCollapse" style={style}>
        <li>STORE</li>
        <li>FOR HOME</li>
        <li>FOR WORK</li>
        <li>SUPPORT</li>
        <li>SIGNUP</li>
        <li>SIGNIN</li>
        <li>Search</li>
      </ul>
      </div>
    </div>
  );
}
