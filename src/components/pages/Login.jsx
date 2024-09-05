import { useNavigate } from "react-router-dom";
import React from "react";
import "./login.css";

function Login() {
  const navigate = useNavigate();

  const newOne = () => {
    navigate("/Orderlist");
  };
  return (
    
    <div className="form">
    <button onClick={newOne} className="bn">Log In</button>
      
    </div>
  );
}
export default Login;
