import { useNavigate } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";
import "./orderitem.css";
import img3 from "../Images/img3.jpg";
import Btnn from "./Btnn";

const Orderitem = () => {
  const navigate = useNavigate();

  function goLogin() {
    navigate("/");
  }
  return (
    <>
      <div className="bbc">
        <button onClick={goLogin} className="inn">
          Back
        </button>
      </div>
      <Btnn />
      <div className="main">
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox"></input>
                Order ID
              </th>
              <th>Created</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th align="right">Updates</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox"></input>
                <a href="#">111 211</a>
              </td>
              <td>22, 08, 2024</td>
              <td>
                <div className="bind">
                  <div>
                    {" "}
                    <img src={img3} className="pic" />
                  </div>
                  <div className="nm">Sahil</div>
                </div>
              </td>
              <td>$500</td>
              <td>
                <select name="at">
                  <option value="Authrized">Authorized</option>
                </select>
              </td>
              <td align="right">Today</td>
            </tr>
            <br></br>
            <tr>
              <td>
                <input type="checkbox"></input>
                <a href="#">111 212</a>
              </td>
              <td>22, 08, 2024</td>
              <td>
                <div className="bind">
                  <div>
                    {" "}
                    <img src={img3} className="pic" />
                  </div>
                  <div className="nm">Varun</div>
                </div>
              </td>
              <td>$500</td>
              <td>
                <select name="pd">
                  <option value="paid">Paid</option>
                </select>
              </td>
              <td align="right">Yesterday</td>
            </tr>
            <br></br>
            <tr>
              <td>
                <input type="checkbox"></input>
                <a href="#">111 213</a>
              </td>
              <td>22, 08, 2024</td>
              <td>
                <div className="bind">
                  <div>
                    {" "}
                    <img src={img3} className="pic" />
                  </div>
                  <div className="nm">Gaurav</div>
                </div>
              </td>
              <td>$500</td>
              <td>
                <select name="pd">
                  <option value="paid">Paid</option>
                </select>
              </td>
              <td align="right">Today</td>
            </tr>
            <br></br>
            <tr>
              <td>
                <input type="checkbox"></input>
                <a href="#">111 214</a>
              </td>
              <td>22, 08, 2024</td>
              <td>
                <div className="bind">
                  <div>
                    {" "}
                    <img src={img3} className="pic" />
                  </div>
                  <div className="nm">Tushar</div>
                </div>
              </td>
              <td>$500</td>
              <td>
                <select name="at">
                  <option value="Authrized">Authorized</option>
                </select>
              </td>
              <td align="right">Yesterday</td>
            </tr>
            <br></br>
            <tr>
              <td>
                <input type="checkbox"></input>
                <a href="#">111 215</a>
              </td>
              <td>22, 08, 2024</td>
              <td>
                <div className="bind">
                  <div>
                    {" "}
                    <img src={img3} className="pic" />
                  </div>
                  <div className="nm">Abhinev</div>
                </div>
              </td>
              <td>$500</td>
              <td>
                <select name="at">
                  <option value="Authrized">Authorized</option>
                </select>
              </td>
              <td align="right">Yesterday</td>
            </tr>
            <br></br>
            <tr>
              <td>
                <input type="checkbox"></input>
                <a href="#">111 216</a>
              </td>
              <td>22, 08, 2024</td>
              <td>
                <div className="bind">
                  <div>
                    {" "}
                    <img src={img3} className="pic" />
                  </div>
                  <div className="nm">Taranjot</div>
                </div>
              </td>
              <td>$500</td>
              <td>
                <select name="pd">
                  <option value="paid">Paid</option>
                </select>
              </td>
              <td align="right">Yesterday</td>
            </tr>
            <br></br>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orderitem;
