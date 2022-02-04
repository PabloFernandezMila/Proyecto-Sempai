import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import "../assets/styles/login/login.css";
import { Link } from "react-router-dom";

// Title Variables
const loginTitle = "Login";
const loginSubtitle = "Please enter your email and password";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/login";
const secondLinkLabel = "Login";

export function Login() {
  return (
    <div className="login-container tint">
      <Title title={loginTitle} subtitle={loginSubtitle}></Title>
      <Breadcrumb
        firstLinkTo={firstLinkTo}
        firstLinkLabel={firstLinkLabel}
        secondLinkTo={secondLinkTo}
        secondLinkLabel={secondLinkLabel}
      ></Breadcrumb>
      <section id="login-content">
        <div className="login-wrapper flex-item roboto-white tint">
          <form action="/home" autoComplete="off">
            <div className="form-elements">
              <label className="form-element" htmlFor="email">
                <b>Email</b>
              </label>
              <input
                className="form-element"
                type="email"
                placeholder="Enter your Email"
                name="email"
                id="email"
                required
              ></input>

              <label className="form-element" htmlFor="password">
                <b>Password</b>
              </label>
              <input
                className="form-element"
                type="password"
                placeholder="Enter your Password"
                name="password"
                id="password"
                required
              ></input>

              <button
                type="submit"
                className="signin-button roboto-white form-element"
              >
                Login
              </button>

              <div>
                <Link
                  className="form-links form-element"
                  to="/underConstruction"
                >
                  Forgot your password?{" "}
                </Link>
              </div>

              <div>
                <p className="register-text form-element">
                  Don&#39;t have an account?&nbsp;
                </p>
                <Link className="form-links" to="/underConstruction">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
