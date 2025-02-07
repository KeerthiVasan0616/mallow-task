import React, { useState } from "react";

const UserForm = ({ user, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    first_name: user ? user.first_name : "",
    last_name: user ? user.last_name : "",
    email: user ? user.email : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.first_name || !formData.last_name || !formData.email) {
      alert("All fields are required!");
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={formData.first_name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={formData.last_name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <button type="submit">{user ? "Update" : "Create"}</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "300px",
    margin: "0 auto",
  },
};

export default UserForm;