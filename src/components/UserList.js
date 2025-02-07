import React, { useState, useEffect } from "react";
import { getUsers, createUser, updateUser, deleteUser } from "../utils/api";
import { FaTh, FaList, FaSearch } from "react-icons/fa";
import UserTable from "./UserTable";
import UserCard from "./UserCard";
import UserModal from "../components/UserModal";
import "../index.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [viewMode, setViewMode] = useState("table");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch users on mount
  useEffect(() => {
    getUsers().then((response) => setUsers(response.data.data));
  }, []);

  const handleSaveUser = async (userData) => {
    if (selectedUser) {
      // Edit user
      const response = await updateUser(selectedUser.id, userData);
      setUsers(users.map((u) => (u.id === selectedUser.id ? response.data : u)));
    } else {
      // Create user
      const response = await createUser(userData);
      setUsers([...users, response.data]);
    }
    setShowModal(false);
    setSelectedUser(null);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  const filteredUsers = users.filter((user) =>
    `${user.first_name} ${user.last_name} ${user.email}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Users</h2>
        <div className="d-flex">
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
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Create User</button>
        </div>
      </div>

      <div className="d-flex mb-3">
        <button className={`btn me-2 ${viewMode === "table" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setViewMode("table")}>
          <FaList /> Table
        </button>
        <button className={`btn ${viewMode === "grid" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setViewMode("grid")}>
          <FaTh /> Card
        </button>
      </div>

      {viewMode === "table" ? (
        <UserTable users={filteredUsers} onEdit={setSelectedUser} onDelete={handleDelete} setShowModal={setShowModal} />
      ) : (
        <UserCard users={filteredUsers} onEdit={setSelectedUser} onDelete={handleDelete} setShowModal={setShowModal} />
      )}

      {showModal && (
        <UserModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          onSave={handleSaveUser}
          selectedUser={selectedUser}
        />
      )}
    </div>
  );
};

export default UserList;
