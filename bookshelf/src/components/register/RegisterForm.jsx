import { Link } from "react-router-dom";
import "../../assets/styles/register/register.css";

export function RegisterForm() {
  return (
    <section id="register-content">
      <div className="signin flex-item roboto-white tint">
        <form autoComplete="off" action="/home">
          <div className="form-elements ">
            <label className="form-element ">
              <b>Name</b>
            </label>
            <input
              className="form-element "
              type="text "
              placeholder="Enter your Name "
              name="name "
              id="name "
              required
              autoComplete="off"
            ></input>

            <label className="form-element ">
              <b>Lastname</b>
            </label>
            <input
              className="form-element "
              type="text "
              placeholder="Enter your Last Name "
              name="lastname "
              id="lastname "
              required
              autoComplete="off"
            ></input>

            <label className="form-element ">
              <b>Email</b>
            </label>
            <input
              className="form-element "
              type="email "
              placeholder="Enter your Email "
              name="email "
              id="email "
              required
              autoComplete="off"
            ></input>

            <label className="form-element ">
              <b>Password</b>
            </label>
            <input
              className="form-element "
              type="password "
              placeholder="Enter your Password "
              name="password "
              id="password "
              required
              autoComplete="off"
            ></input>

            <button
              type="submit "
              className="register-button roboto-white form-element "
            >
              Sign up
            </button>

            <div>
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
