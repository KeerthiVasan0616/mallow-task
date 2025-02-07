import axios from "axios";

export const fetchUsers = () => async (dispatch) => {
  dispatch({ type: "FETCH_USERS_REQUEST" });
  try {
    const response = await axios.get("https://reqres.in/api/users");
    dispatch({ type: "FETCH_USERS_SUCCESS", payload: response.data.data });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error.message });
  }
};