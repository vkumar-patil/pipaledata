import React, { useState } from "react";
import { peopleData } from "./Pepaledata";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import "./pepalelist.css";
import AddMember from "./Addmember";
function PeopleList() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [people, setPeople] = useState(peopleData);
  const [editPerson, setEditPerson] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTeams, setSelectedTeams] = useState(new Set());
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown visibility
  const [isAddingMember, setIsAddingMember] = useState(false);
  const handleAddMember = (newMember) => {
    setPeople((prevPeople) => [
      ...prevPeople,
      { ...newMember, id: prevPeople.length + 1 }, // Ensure unique ID
    ]);
    setIsAddingMember(false); // Close the form
  };

  // Handle checkbox change for team filtering
  // Handle checkbox change for team filtering
  const handleTeamFilterChange = (e) => {
    const team = e.target.value;
    setSelectedTeams((prev) => {
      const newSelectedTeams = new Set(prev);
      if (e.target.checked) {
        newSelectedTeams.add(team);
      } else {
        newSelectedTeams.delete(team);
      }
      return newSelectedTeams;
    });
  };

  // Filter people based on search term and selected teams
  const filteredPeople = people.filter((person) => {
    const matchesSearch = person.fName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTeams =
      !selectedTeams.size ||
      person.teams.some((team) => selectedTeams.has(team));
    return matchesSearch && matchesTeams;
  });
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSaveEdit = () => {
    setPeople((prevPeople) =>
      prevPeople.map((p) => (p.id === editPerson.id ? editPerson : p))
    );
    setEditPerson(null); // Close the form after saving
  };
  // Get unique teams for filter checkboxes
  const uniqueTeams = Array.from(
    new Set(people.flatMap((person) => person.teams))
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand" href="/">
            Team members
          </a>

          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="dropdown ml-2">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                id="filterDropdown"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                Filter <FaFilter />
              </button>
              {dropdownOpen && (
                <div
                  className="dropdown-menu show"
                  aria-labelledby="filterDropdown"
                >
                  {uniqueTeams.map((team) => (
                    <div key={team} className="form-check">
                      <input
                        type="checkbox"
                        value={team}
                        onChange={handleTeamFilterChange}
                        checked={selectedTeams.has(team)}
                        className="form-check-input"
                        id={`filter-${team}`}
                      />
                      <label
                        htmlFor={`filter-${team}`}
                        className="form-check-label"
                      >
                        {team}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button
              className="btn btn-primary ml-2"
              onClick={(e) => {
                e.preventDefault(); // Prevent default button behavior
                setIsAddingMember(true);
              }}
            >
              + ADD MEMBER
            </button>
          </form>
        </div>
      </nav>

      <div className="people-list-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Role</th>
              <th>Email</th>
              <th>Teams</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredPeople.map((person) => (
              <tr key={person.id}>
                <td onClick={() => setSelectedPerson(person)}>
                  <img
                    src={person.image}
                    alt="profile"
                    style={{ height: "60px", borderRadius: "50px" }}
                  />{" "}
                  {person.fName} {person.lName}
                </td>
                <td onClick={() => setSelectedPerson(person)}>
                  {person.isActive ? "Active" : "Inactive"}
                </td>
                <td onClick={() => setSelectedPerson(person)}>{person.role}</td>
                <td onClick={() => setSelectedPerson(person)}>
                  {person.email}
                </td>

                <td onClick={() => setSelectedPerson(person)}>
                  {person.teams.map((team, index) => (
                    <span key={index} className="badge badge-success mr-1">
                      {team}
                    </span>
                  ))}
                </td>
                <td>
                  <button
                    className="btn btn-danger mr-2"
                    onClick={() => {
                      if (window.confirm("Are you sure?"))
                        setPeople(people.filter((p) => p.id !== person.id));
                    }}
                  >
                    <MdDeleteOutline />
                  </button>
                  <button
                    className="btn btn-warning "
                    onClick={() => setEditPerson(person)}
                  >
                    <MdEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isAddingMember && (
          <AddMember
            onAdd={handleAddMember}
            onCancel={() => setIsAddingMember(false)}
            teams={uniqueTeams}
          />
        )}

        {selectedPerson && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {selectedPerson.fName} {selectedPerson.lName}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setSelectedPerson(null)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Status: {selectedPerson.isActive ? "Active" : "Inactive"}
                  </p>
                  <p>Role: {selectedPerson.role}</p>
                  <p>Email: {selectedPerson.email}</p>
                  <p>Teams: {selectedPerson.teams.join(", ")}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setSelectedPerson(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {editPerson && (
          <div className="modal show" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Edit {editPerson.fName} {editPerson.lName}
                  </h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setEditPerson(null)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fName"
                        value={editPerson.fName}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="lName"
                        value={editPerson.lName}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Role</label>
                      <input
                        type="text"
                        className="form-control"
                        name="role"
                        value={editPerson.role}
                        onChange={handleEditChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={editPerson.email}
                        onChange={handleEditChange}
                      />
                    </div>
                    {/* <div className="form-group">
                      <label>Teams</label>
                      {uniqueTeams.map((team) => (
                        <div key={team} className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={editPerson.teams.includes(team)}
                            onChange={() => handleEditTeamsChange(team)}
                          />
                          <label className="form-check-label">{team}</label>
                        </div>
                      ))}
                    </div> */}
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setEditPerson(null)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSaveEdit} // Save the updated data
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PeopleList;
