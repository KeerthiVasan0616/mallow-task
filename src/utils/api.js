import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

export const login = (email, password) =>
  api.post("/login", { email, password });

export const getUsers = () => api.get("/users");
export const createUser = (user) => api.post("/users", user);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/users/${id}`);