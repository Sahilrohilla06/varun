import React from "react";
import "./header.css";
import img1 from './../Images/img1.jpg'
import img2 from './../Images/img2.jpg'

function Header() {
  return (
    
      <div className="nav">
        <div >
          <img src={img1} className="logo"/>
        </div>
        <div className="name">Logicease</div>
        <div >
          <img src={img2} className="pp"/>
        </div>
      </div>
   
  );
}
export default Header;
