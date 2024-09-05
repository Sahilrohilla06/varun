import { useNavigate } from "react-router-dom";
import React from "react";
import "./menu.css";
function Menu() {
  const navigate = useNavigate();

  function goOrder() {
    navigate("/Orderlist");
  }
  function vvv(){
     alert(" Home \n Product \n Order \n About");
  }
  return (
    <>
      <div className="out">
        <button onClick={goOrder} className="in">
          Back
        </button>
      </div>
      <div className="top">
        <div className="logs"></div>
        <div className="ones">Home</div>
        <div className="ones">Product</div>
        <div className="ones">Order</div>
        <div className="ones">About</div>
        <button onClick={vvv} className="vvs">
            ...
        </button>
      </div>
    </>
  );
}
export default Menu;
