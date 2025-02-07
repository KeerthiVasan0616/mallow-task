import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserCard = ({ users, onEdit, onDelete, setShowModal }) => {
  const [hoveredUser, setHoveredUser] = useState(null);

  return (
    <div className="row g-4">
      {users.map((user) => (
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

            {hoveredUser === user.id && (
              <div className="overlay d-flex justify-content-center align-items-center">
                <button className="btn btn-primary btn-sm me-2" onClick={() => { onEdit(user); setShowModal(true); }}>
                  <FaEdit />
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>
                  <FaTrash />
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
