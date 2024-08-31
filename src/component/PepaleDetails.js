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
      {/* <div className="card" style={{ width: "18rem" }}>
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
      </div> */}

      {/* <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>

      <div
        class="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        key={pepale.id}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">
                Modal title{pepale.email}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default PepaleDetails;
