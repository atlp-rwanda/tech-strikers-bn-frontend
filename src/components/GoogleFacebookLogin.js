import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import * as CgIcons from "react-icons/cg";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import axios from "axios";
import { FadeLoader } from "react-spinners";
const googleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const facebookClientID = process.env.REACT_APP_FACEBOOK_CLIENT_ID;
const googleUrl = process.env.REACT_APP_GOOGLE_URL;
const facebookUrl = process.env.REACT_APP_FACEBOOK_URL;
function GoogleFacebookLogin() {
  const [loading, setLoading] = useState("Use Social Media");
  const handleClick = () => {
    setLoading(<FadeLoader />);
  };
  const responseSuccessGoogle = (response) => {
    axios({
      method: "POST",
      url: googleUrl,
      data: { tokenId: response.tokenId },
    }).then((response) => {
      const result = response.data;
      if (result.success === true) {
        localStorage.setItem("token", result.token);
        window.location = "/dashboard";
      } else {
        alert(result.message);
      }
    });
  };
  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    axios({
      method: "POST",
      url: facebookUrl,
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      const result = response.data;
      if (result.success === true) {
        localStorage.setItem("token", result.token);
        window.location = "/dashboard";
      } else {
        alert(result.message);
      }
    });
  };

  const socialMediaButtons = {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
  };

  const fbButtons = {
    width: "150px",
    height: "45px",
    backgroundColor: "#3b5998",
    border: "none",
    borderRadius: "2px",
  };
  const paraIcon = {
    dispaly: "flex",
    justifyContent: "center",
  };
  const para = {
    color: "white",
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: "10px",
    alignItems: "center",
    fontSize: "15px",
    marginLeft: "10px",
  };

  const button = {
    border: "none",
  };

  const loadingStyle = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: "#3b5998",
    fontSize: "18px",
    height: "60px",
  };
  const icon = {
    color: "white",
    fontSize: "1.5rem",
  };

  return (
    <div>
      <div style={loadingStyle}>{loading}</div>
      <div style={socialMediaButtons}>
        <div>
          <button onClick={handleClick} style={button}>
            <GoogleLogin
              width="100px"
              clientId={googleClientID}
              buttonText="Login with Google"
              onSuccess={responseSuccessGoogle}
              onFailure={responseErrorGoogle}
              cookiePolicy={"single_host_origin"}
              onClick={handleClick}
            />
          </button>
        </div>
        <div>
          <button onClick={handleClick} style={button}>
            <FacebookLogin
              width="100px"
              appId={facebookClientID}
              autoLoad={false}
              callback={responseFacebook}
              icon={<CgIcons.CgFacebook />}
              render={(renderProps) => (
                <button onClick={renderProps.onClick} style={fbButtons}>
                  <div style={paraIcon}>
                    <p style={para}>
                      <CgIcons.CgFacebook style={icon} /> facebook
                    </p>
                  </div>
                </button>
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GoogleFacebookLogin;
