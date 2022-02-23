import "../../assets/styles/login/login.css";
import { Link } from "react-router-dom";
import { RequiredInput } from "../commons/RequiredInput";

export function LoginForm() {
  return (
    <section id="login-content">
      <div className="login-wrapper flex-item roboto-white tint">
        <form action="/home" autoComplete="off">
          <div className="form-elements">
            <label className="form-element" htmlFor="email">
              <b>Email</b>
            </label>
            <RequiredInput
              className="form-element"
              type="email"
              placeholder="Enter your Email"
              name="email"
              id="email"
              autoComplete="off"
            ></RequiredInput>

            <label className="form-element" htmlFor="password">
              <b>Password</b>
            </label>
            <RequiredInput
              className="form-element"
              type="password"
              placeholder="Enter your Password"
              name="password"
              id="password"
              autoComplete="off"
            ></RequiredInput>

            <button
              type="submit"
              className="signin-button roboto-white form-element"
            >
              Login
            </button>

            <div className="text-align-center">
              <Link className="form-links form-element" to="/underConstruction">
                Forgot your password?
              </Link>
            </div>

            <div className="text-align-center">
              <p className="register-text form-element">
                Don&#39;t have an account?&nbsp;
              </p>
              <Link className="form-links" to="/register">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
