//import logo from "./logo.svg";
import "./App.css";
import Peplelist from "./component/Peplelist";
import PepaleDetails from "./component/PepaleDetails";
import { Routes, Route } from "react-router-dom";
//import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";
import { ImDelicious } from "react-icons/im";
import MainNavbar from "./component/MainNavbar";
function App() {
  return (
    <>
      <MainNavbar />
      <div style={{ display: "flex", margin: "0%", padding: "0%", }}>
        <div className="sidebar " style={{backgroundColor:"azure"}}>
          <Link to={"/PepaleDetails"}>
            <p style={{marginTop:"50px"}}>
              <ImDelicious />
              Overview
            </p>
          </Link>
          <Link to={"/Peplelist"}>
            <p>
              <ImDelicious />
              People-Directory
            </p>
          </Link>
        </div>
        <div className="maindata maindata-expand-lg" >
          <Routes>
            <Route path="/Peplelist" element={<Peplelist />}></Route>
            <Route path="/PepaleDetails" element={<PepaleDetails />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
