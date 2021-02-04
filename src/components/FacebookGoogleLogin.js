import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

function FacebookGoogleLogin() {
  return (
    <div>
      <GoogleLogin
        clientId="1073388050685-2f69mr0uovi1g7e6ua8sf0sh0gd6sa5l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default FacebookGoogleLogin;
