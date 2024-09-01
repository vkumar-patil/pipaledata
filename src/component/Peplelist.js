import React, { useState } from "react";
import { peopleData } from "./Pepaledata";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import "./pepalelist.css";

function PeopleList() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [people, setPeople] = useState(peopleData);

  const handleLaunchClick = (person) => {
    setSelectedPerson(person);
  };
  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are you sure you want to delete?");
    if (isConfirm) {
      const updatePeple = people.filter((Item) => Item.id !== id);
      setPeople(updatePeple);
    }
  };

  return (
    <div style={{ margin: "0%", padding: "0%", width: "1130px" }}>
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
        <tbody>
          {people.map((ele) => {
            const status = ele.isActive ? "Active" : "Inactive";
            return (
              <>
                <tr key={ele.id}>
                  <th scope="row">
                    <img
                      src={ele.image}
                      style={{
                        height: "30px",
                        width: "30px",
                        borderRadius: "30px",
                        marginRight:"2px"
                      }}
                      alt="img"
                      
                    />{" "}
                    {ele.fName} {ele.lName}
                  </th>

                  <td>{status}</td>
                  <td>{ele.role}</td>
                  <td>{ele.email}</td>
                  <td
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    onClick={() => handleLaunchClick(ele)}
                  >
                    {ele.teams.map((team, index) => (
                      <button key={index} className="btn btn-success mr-2 my-2">
                        {team}
                      </button>
                    ))}
                  </td>

                  <td>
                    <button
                      className="btn btn-danger delete"
                      onClick={() => handleDelete(ele.id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-warning edit">
                      <MdEdit />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                {selectedPerson
                  ? `${selectedPerson.fName} ${selectedPerson.lName}`
                  : "Modal title"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {selectedPerson && (
                <div>
                  <p>
                    <strong>Status:</strong>{" "}
                    {selectedPerson.isActive ? "Active" : "Inactive"}
                  </p>
                  <p>
                    <strong>Role:</strong> {selectedPerson.role}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedPerson.email}
                  </p>
                  <p>
                    <strong>Teams:</strong> {selectedPerson.teams.join(", ")}
                  </p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleList;
