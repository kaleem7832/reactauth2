import { Link } from "react-router-dom";
import { useState } from "react";
import Auth from "../auth/auth";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setloginError] = useState("");
  const history = useHistory();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please provide valid email.");
      return;
    } else {
      setEmailError("");
    }

    if (password.length < 8) {
      setPasswordError("Password at least 8 char long");
      return;
    } else {
      setPasswordError("");
    }
    axios
      .post("http://localhost:4001/login", { email, password })
      .then((response) => {
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("token", response.data.token);
        Auth.authenticate();
        setloginError("");
        history.push("/dashboard");
      })
      .catch(function (error) {
        setloginError("Email or password is not correct.");
        console.log("error", error);
      });
  };
  return (
    <>
      <div className="ui middle aligned center aligned stackable grid h-100">
        <div className="six wide column">
          <h2 className="ui teal image header">
            <div className="content">Log-in to your account</div>
          </h2>
          <form className="ui large form error" onSubmit={onSubmit}>
            <div className="ui segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="ui fluid large teal submit button"
                type="submit"
              >
                Login
              </button>
            </div>

            <div class="ui error message">{emailError}</div>
            <div class="ui error message">{passwordError}</div>
            <div class="ui error message">{loginError}</div>
          </form>

          <div className="ui message">
            New to us? <Link to="/signup">Sign Up</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
