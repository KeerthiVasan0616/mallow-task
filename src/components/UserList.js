import React, { useState } from "react";
import UserForm from "./UserForm";
import { FaEdit, FaTrash, FaTh, FaList, FaSearch } from "react-icons/fa";
import "../index.css"; 
import UserModal from "../components/UserModal";


const UserList = ({ users }) => {
  const [viewMode, setViewMode] = useState("table"); 
  const [hoveredUser, setHoveredUser] = useState(null);
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
 // Filter users based on search input
 const filteredUsers = users.filter((user) =>
  `${user.first_name} ${user.last_name} ${user.email}`
    .toLowerCase()
    .includes(searchQuery.toLowerCase())
);


  const handleCreate = () => {
    setSelectedUser(null);
    setFormVisible(true);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setFormVisible(true);
  };

  const handleSubmit = (formData) => {
    console.log("Form Data:", formData);
    setFormVisible(false);
  };

  const handleCancel = () => {
    setFormVisible(false);
  };

  return (
    // <div>
    //   <button onClick={handleCreate}>Create User</button>
    //   {isFormVisible && (
    //     <UserForm
    //       user={selectedUser}
    //       onSubmit={handleSubmit}
    //       onCancel={handleCancel}
    //     />
    //   )}
    //   {users.map((user) => (
    //     <div key={user.id}>
    //       <h2>{user.first_name} {user.last_name}</h2>
    //       <p>{user.email}</p>
    //       <button onClick={() => handleEdit(user)}>Edit</button>
    //     </div>
    //   ))}
    // </div>
    <div className="container mt-4">
      {/* Header Section with Search and Create User Button */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Users</h2>
        <div className="d-flex">
          {/* Search Input */}
          <div className="input-group me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <span className="input-group-text">
              <FaSearch />
            </span>
          </div>
          {/* Create User Button */}
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Create User</button>
        </div>
      </div>

      {/* Toggle Buttons for View Mode */}
      <div className="d-flex mb-3">
        <button
          className={`btn me-2 ${viewMode === "table" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setViewMode("table")}
        >
          <FaList /> Table
        </button>
        <button
          className={`btn ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"}`}
          onClick={() => setViewMode("grid")}
        >
          <FaTh /> Card
        </button>
      </div>

      {/* Table View */}
      {viewMode === "table" && (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>
                    <img
                      src={user.avatar}
                      alt={user.first_name}
                      className="rounded-circle me-2"
                      style={{ width: "40px", height: "40px", objectFit: "cover" }}
                    />
                    <a href={`mailto:${user.email}`} className="text-decoration-none">
                      {user.email}
                    </a>
                  </td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <button className="btn btn-primary btn-sm me-2">
                      <FaEdit /> Edit
                    </button>
                    <button className="btn btn-danger btn-sm">
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
{showModal && <UserModal show={showModal} handleClose={() => setShowModal(false)} />}
      {/* Grid View */}
      {viewMode === "grid" && (
        <div className="row g-4">
          {filteredUsers.map((user) => (
            <div key={user.id} className="col-md-4">
              <div
                className="card shadow-sm position-relative user-card"
                onMouseEnter={() => setHoveredUser(user.id)}
                onMouseLeave={() => setHoveredUser(null)}
              >
                <div className="card-body text-center">
                  <img
                    src={user.avatar}
                    alt={user.first_name}
                    className="rounded-circle mb-3"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                  <p className="text-muted">{user.email}</p>
                </div>

                {/* Hover Effect for Edit & Delete */}
                {hoveredUser === user.id && (
                  <div className="overlay d-flex justify-content-center align-items-center">
                    <button className="btn btn-primary me-2">
                      <FaEdit />
                    </button>
                    <button className="btn btn-danger">
                      <FaTrash />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    
  );
};

export default UserList;