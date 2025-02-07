import React from "react";

const UserCard = ({ user }) => {
  return (
    <div style={styles.card}>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} style={styles.avatar} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "200px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "16px",
  },
};

export default UserCard;