
import React from "react";
import "./responsive.css";

import img1 from "../Images/img1.jpg";
import img2 from "../Images/img2.jpg";
import img3 from "../Images/img3.jpg";

function Responsive() {
  
  return (
    <>
      
      <div className="all">
        <div>
          <img src={img1} className="pic1" />
        </div>
        <div>
          <img src={img2} className="pic2" />
        </div>
        <div>
          <img src={img3} className="pic3" />
        </div>
      </div>
    </>
  );
}
export default Responsive;
