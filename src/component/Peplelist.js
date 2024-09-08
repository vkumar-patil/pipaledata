import React, { useState } from "react";
import { peopleData } from "./Pepaledata";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import "./pepalelist.css";
import { FaFilter } from "react-icons/fa";

function PeopleList() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [people, setPeople] = useState(peopleData);
  const [serchterm, searchTerm] = useState("");
  //const [filterd, setFilterd] = useState([]);

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
  const filteredPeople = people.filter((person) =>
    person.fName.toLowerCase().includes(serchterm.toLowerCase())
  );

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            Team members
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="nav-link" style={{ borderRadius: "100px" }}>
                  100 users
                </button>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control  mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={serchterm}
                onChange={(e) => searchTerm(e.target.value)}
              />
              {people.map((team) => {
                return (
                  <input type="checkbox" name={team.teams} value={team.teams} className="filter" />
                );
              })}
              filter <FaFilter />
              {/* </input> */}
              <button className="btn btn-primary mr-auto">+ ADD MEMBER</button>
            </form>
          </div>
        </nav>
      </div>
      <div style={{ margin: "0%", padding: "0%", width: "1100px" }}>
        {/* <Navbar /> */}
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
            {filteredPeople.map((ele) => {
              const status = ele.isActive ? "Active" : "Inactive";
              const filterdteams = ele.teams.filter((team) =>
                team.includes("sname")
              );
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
                          marginRight: "2px",
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
                      {filterdteams.map((team, index) => (
                        <button
                          key={index}
                          className="btn btn-success mr-2 my-2"
                        >
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
    </>
  );
}

export default PeopleList;
