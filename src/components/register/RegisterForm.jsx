import { Link } from "react-router-dom";
import "../../assets/styles/register/register.css";
import { RequiredInput } from "../commons/RequiredInput";

export function RegisterForm() {
  return (
    <section id="register-content">
      <div className="signin flex-item roboto-white tint">
        <form autoComplete="off" action="/home">
          <div className="form-elements ">
            <label className="form-element ">
              <b>Name</b>
            </label>
            <RequiredInput
              className="form-element "
              type="text "
              placeholder="Enter your Name "
              name="name "
              id="name "
              autoComplete="off"
            ></RequiredInput>

            <label className="form-element ">
              <b>Lastname</b>
            </label>
            <RequiredInput
              className="form-element "
              type="text "
              placeholder="Enter your Last Name "
              name="lastname "
              id="lastname "
              autoComplete="off"
            ></RequiredInput>

            <label className="form-element ">
              <b>Email</b>
            </label>
            <RequiredInput
              className="form-element "
              type="email "
              placeholder="Enter your Email "
              name="email "
              id="email "
              autoComplete="off"
            ></RequiredInput>

            <label className="form-element ">
              <b>Password</b>
            </label>
            <RequiredInput
              className="form-element "
              type="password "
              placeholder="Enter your Password "
              name="password "
              id="password "
              autoComplete="off"
            ></RequiredInput>

            <button
              type="submit "
              className="register-button roboto-white form-element "
            >
              Sign up
            </button>

            <div className="text-align-center">
              <p className="register-text form-element ">
                Already have an account?&nbsp;
              </p>
              <Link className="form-links" to="/login ">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
