import React, { useState } from "react";
import { peopleData } from "./Pepaledata";
import { useParams } from "react-router-dom";

function PepaleDetails() {
  const { id } = useParams();
  const [pepaledetails, setpepaleDetail] = useState();

  const data = peopleData.filter((p) => p.id == id);
  setpepaleDetail(data);

  console.log(pepaledetails);
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        {pepaledetails.map((ele) => {
          return (
            <>
              <img className="card-img-top" src={ele.image} alt="img" />
              <div className="card-body" key={ele.id}>
                <h5 className="card-title">
                  Name
                  {ele.fName}
                  {ele.lName}
                </h5>
                <p className="card-text">Email{ele.email}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Role{ele.role}</li>
                <li className="list-group-item">Number{ele.contactNumber}</li>
                <li className="list-group-item">DOB{ele.DOB}</li>
              </ul>
              <div className="card-body">
                <p className="card">Gender{ele.Gender}</p>
                <p className="card">Teams{ele.teams}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default PepaleDetails;
