import React, { useState } from "react";

function AddMember({ onAdd, onCancel, teams }) {
  const [newMember, setNewMember] = useState({
    fName: "",
    lName: "",
    email: "",
    role: "",
    isActive: true,
    teams: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMember((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTeamChange = (team) => {
    setNewMember((prev) => {
      const newTeams = prev.teams.includes(team)
        ? prev.teams.filter((t) => t !== team)
        : [...prev.teams, team];
      return { ...prev, teams: newTeams };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    onAdd(newMember); // Add the new member
    setNewMember({
      fName: "",
      lName: "",
      email: "",
      role: "",
      isActive: true,
      teams: [],
    });
  };

  return (
    <div className="modal show" style={{ display: "block", overflow:"scroll"}} >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add New Member</h5>
            <button type="button" className="close" onClick={onCancel}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  value={newMember.fName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="lName"
                  value={newMember.lName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  className="form-control"
                  name="role"
                  value={newMember.role}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={newMember.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Teams</label>
                {teams.map((team) => (
                  <div key={team} className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={newMember.teams.includes(team)}
                      onChange={() => handleTeamChange(team)}
                    />
                    <label className="form-check-label">{team}</label>
                  </div>
                ))}
              </div>
              <button type="submit" className="btn btn-primary">
                Add Member
              </button>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddMember;
