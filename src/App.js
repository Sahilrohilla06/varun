import Header from "./components/header/Header";
import Login from "./components/pages/Login";
import Menu from "./components/pages/Menu";
import Orderitem from "./components/pages/Orderitem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Orderlist" element={<Orderitem />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
