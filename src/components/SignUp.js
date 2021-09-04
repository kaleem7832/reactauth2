import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/auth";
import { useHistory } from "react-router-dom";

const axios = require("axios");

const SignUp = () => {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [password2, setpassword2] = useState("");
  const [empty, setEmpty] = useState("");

  const history = useHistory();

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(1);

    if (!name || !email || !password2 || !password) {
      setEmpty("Please provide answers for all.");
      return;
    }

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

    if (password != password2) {
      setPasswordError("Password does not match!");
      return;
    } else {
      setPasswordError("");
    }

    //finally sending data to server
    axios
      .post("http://localhost:4001/register", { name, email, password })
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        Auth.authenticate();
        history.push("/login");
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  return (
    <div className="ui middle aligned center aligned stackable grid h-100">
      <div className="six wide column">
        <h2 className="ui teal image header">
          <div className="content">Create a new account</div>
        </h2>
        <form className="ui large form error" onSubmit={onSubmit}>
          <div className="ui segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="envelope icon"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={password2}
                  onChange={(e) => setpassword2(e.target.value)}
                />
              </div>
            </div>
            <button className="ui fluid large teal submit button" type="submit">
              Sign Up
            </button>
          </div>

          <div class="ui error message">{empty}</div>
          <div class="ui error message">{emailError}</div>
          <div class="ui error message">{passwordError}</div>
        </form>

        <div className="ui message">
          Already a user? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
