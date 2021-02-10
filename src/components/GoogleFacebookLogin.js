import React from "react";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
function GoogleFacebookLogin() {
  const responseSuccessGoogle = (response) => {
    //console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("google login success", response);
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/facebooklogin",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      console.log("facebook login success", response);
    });
  };

  return (
    <div>
      <div>
        <h5>...........................................................</h5>
        <GoogleLogin
          clientId="1073388050685-2f69mr0uovi1g7e6ua8sf0sh0gd6sa5l.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
      <div>
        <h5>...........................................................</h5>
        <FacebookLogin
          appId="829045074521003"
          autoLoad={false}
          callback={responseFacebook}
        />
      </div>
    </div>
  );
}

export default GoogleFacebookLogin;
