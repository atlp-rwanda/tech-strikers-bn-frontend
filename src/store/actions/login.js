import axios from "axios";

export const login = (data) => {
  return (dispatch) => {
    return axios.post(
      "https://strikers2020.herokuapp.com/api/v1/auth/siginIn",
      data
    );
  };
};
