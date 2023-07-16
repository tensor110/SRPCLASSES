import React from "react";
import "../StyleSheets/login.css";
import logo from '../Assets/srp-logo.png'
import { Image} from "@chakra-ui/react";
import { TextField, Button } from "@mui/material";

function Login() {
  return (
    <div id="loginn">
      <div id="loginn-container">
        <div className="login-form">
        <img src={logo} alt="" className="logo" />
        <span className="logo-detail">Welcome To</span>
        <span className="logo-name">SRP Classes</span>
          <TextField
            id="outlined-basic"
            label="Email/Phone Number"
            variant="outlined"
            size="small"
            sx={{ width: "80%", mb: "5%" }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            size="small"
            sx={{ width: "80%", mb: "5%" }}
          />
          <Button variant="contained"
          sx={{ mb: "5%", width: "80%", backgroundColor:'rgba(127, 86, 218, 1)' }}>
            Sign In
          </Button>
          <button type="button" class="login-with-google-btn" >
  Sign in with Google
</button>
        </div>
        <div className="img">
          {/* <img src="https://bit.ly/dan-abramov" alt="" /> */}
          <Image
            boxSize="100%"
            display="inline"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
