import {  Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="ui middle aligned center aligned stackable grid h-100">
      <div className="six wide column">
        <h2 className="ui teal image header">
          <div className="content">Create a new account</div>
        </h2>
        <form className="ui large form">
          <div className="ui segment">
            <div className="field">
              <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="name" placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="envelope icon"></i>
                <input type="email" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="field">
              <div className="ui left icon input">
                <i className="lock icon"></i>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div className="ui fluid large teal submit button">SIGN UP</div>
          </div>

          <div className="ui error message"></div>
        </form>

        <div className="ui message">
          Already a user? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
