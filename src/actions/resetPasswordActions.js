import axios from "axios";
import { Redirect } from "react-router-dom";
export const resetEmail = (data) => (dispatch) => {
  console.log(data);
  axios
    .post(
      "https://strikers2020.herokuapp.com/api/v1/auth/forgot_password",
      data
    )
    .then((res) => {
      dispatch({
        type: "RESET_PASSWORD",
        payload: res.data.token,
      });
      return <Redirect to="/password_reset" />;
    })
    .catch((err) => {
      console.log(err.message);
    });
};
export const resetPassword = (token, data) => (dispatch) => {
  // console.log(token);
  // console.log(data);
  axios
    .post(
      `https://strikers2020.herokuapp.com/api/v1/reset_password/${token}`,
      data
    )
    .then((res) => {
      //   dispatch({
      //       type: 'RESET_PASSWORD',
      //       payload: res.data.token
      //   })
      console.log(res);
    })
    .catch((err) => {
      console.log(err.message);
    });
};
