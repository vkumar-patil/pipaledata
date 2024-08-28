import React, { useEffect, useState } from "react";
import { peopleData } from "./Pepaledata";
import { useParams } from "react-router-dom";

function PepaleDetails() {
  const { id } = useParams();
  const [pepale, setPepale] = useState({});
  useEffect(() => {
    const data = peopleData.filter((ele) => ele.id === id);
    setPepale(data[0]);
  }, [id]);

  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <>
          <img
            className="card-img-top"
            src={pepale.image}
            alt="img"
            style={{ height: "180px" }}
          />
          <div className="card-body" key={pepale.id}>
            <h5 className="card-title">
              Name:-
              {pepale.fName}
              {pepale.lName}
            </h5>
            <p className="card-text">Email:-{pepale.email}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Role:-{pepale.role}</li>
            <li className="list-group-item">Number:-{pepale.contactNumber}</li>
            <li className="list-group-item">DOB:-{pepale.DOB}</li>
          </ul>
          <div className="card-body">
            <p className="card">Gender:-{pepale.Gender}</p>
            <p className="card">Teams:-{pepale.teams}</p>
          </div>
        </>
      </div>
    </div>
  );
}

export default PepaleDetails;
