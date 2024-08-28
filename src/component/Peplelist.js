//import React, { useState } from "react";
import { peopleData } from "./Pepaledata";
//import { HiMiniSun } from "react-icons/hi2";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import "./pepalelist.css";
import { Link } from "react-router-dom";
//import { CgEditFade } from "react-icons/cg";

//import FontAwesomeIcon from "react-fontawesome";

function Peplelist() {
  // const [pepale, setpepale] = useState();

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Role</th>
            <th scope="col">Email address</th>
            <th scope="col">Teams</th>
          </tr>
        </thead>
        {peopleData.map((ele) => {
          const status = ele.isActive ? "Active" : "inactive";
          return (
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    src={ele.image}
                    style={{
                      hight: "20px",
                      width: "30px",
                      borderRadius: "30px",
                    }}
                    alt="img"
                  />{" "}
                  {}
                  {}
                  {ele.fName}.{ele.lName}
                </th>
                <td>{status}</td>
                <td>{ele.role}</td>
                <td>{ele.email}</td>
                <td>{ele.teams}</td>
                <td>
                  <Link
                    className="btn btn-success"
                    to={`/PepaleDetails/${ele.id}`}
                    key={ele.id}
                  >
                    DETAILS
                  </Link>
                  <button className="btn btn-danger delete">
                    <MdDeleteOutline />
                  </button>
                  <button className="btn btn-warning edit">
                    <MdEdit />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Peplelist;
