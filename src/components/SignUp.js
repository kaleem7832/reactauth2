import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const SignUp = () => {
  return (
    <div class="ui middle aligned center aligned stackable grid h-100">
      <div class="six wide column">
        <h2 class="ui teal image header">
          <div class="content">Create a new account</div>
        </h2>
        <form class="ui large form">
          <div class="ui stacked segment">
            <div class="field">
              <div class="ui left icon input">
                <i class="user icon"></i>
                <input type="text" name="name" placeholder="Name" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="envelope icon"></i>
                <input type="email" name="email" placeholder="E-mail address" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div class="field">
              <div class="ui left icon input">
                <i class="lock icon"></i>
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                />
              </div>
            </div>
            <div class="ui fluid large teal submit button">SIGN UP</div>
          </div>

          <div class="ui error message"></div>
        </form>

        <div class="ui message">
          Already a user? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
