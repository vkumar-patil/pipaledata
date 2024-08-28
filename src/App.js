//import logo from "./logo.svg";
import "./App.css";
import Peplelist from "./component/Peplelist";
import PepaleDetails from "./component/PepaleDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Peplelist />}></Route>
        <Route path="/PepaleDetails/:id" element={<PepaleDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
