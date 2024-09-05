import { useNavigate } from "react-router-dom";
import React from "react";
import "./btnn.css";

function Btnn() {
  const navigate = useNavigate();
  function goBurger() {
    navigate("/Menu")
  }
  return (
    <div className="nxt">
      <button onClick={goBurger} className="btn">
        Next
      </button>
    </div>
  );
}

export default Btnn;
