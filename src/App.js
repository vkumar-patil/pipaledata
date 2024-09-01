//import logo from "./logo.svg";
import "./App.css";
import Peplelist from "./component/Peplelist";
import PepaleDetails from "./component/PepaleDetails";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <div
        className="sidebar "
        style={{ display: "flex", margin: "0%", padding: "0%" }}
      >
        <div>
          <div style={{ marginTop: "50px" }}>
            <Link to={"/PepaleDetails"}>
              <p>Overview</p>
            </Link>
          </div>
          <div style={{ marginTop: "30px" }}>
            <Link to={"/Peplelist"}>
              <p>People Directory</p>
            </Link>
          </div>
        </div>
        <div style={{ marginLeft: "40px", width: "800px" }}>
          <Routes>
            <Route path="/Peplelist" element={<Peplelist />}></Route>
            <Route path="/PepaleDetails" element={<PepaleDetails />}></Route>
          </Routes>
          {/* {<PepaleDetails />?<PepaleDetails />: <Peplelist />} */}
        </div>
      </div>
    </>
  );
}

export default App;
