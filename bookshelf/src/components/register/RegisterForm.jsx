import { Link } from "react-router-dom";
import "../../assets/styles/register/register.css";

export function RegisterForm() {
  return (
    <section id="register-content">
      <div class="signin flex-item roboto-white tint">
        <form autocomplete="off" action="/home" autoComplete="off ">
          <div class="form-elements ">
            <label class="form-element " for="name ">
              <b>Name</b>
            </label>
            <input
              class="form-element "
              type="text "
              placeholder="Enter your Name "
              name="name "
              id="name "
              required
            ></input>

            <label class="form-element " for="lastname ">
              <b>Name</b>
            </label>
            <input
              class="form-element "
              type="text "
              placeholder="Enter your Last Name "
              name="lastname "
              id="lastname "
              required
            ></input>

            <label class="form-element " for="email ">
              <b>Email</b>
            </label>
            <input
              class="form-element "
              type="email "
              placeholder="Enter your Email "
              name="email "
              id="email "
              required
            ></input>

            <label class="form-element " for="password ">
              <b>Password</b>
            </label>
            <input
              class="form-element "
              type="password "
              placeholder="Enter your Password "
              name="password "
              id="password "
              required
            ></input>

            <button
              type="submit "
              class="register-button roboto-white form-element "
            >
              Sign up
            </button>

            <div>
              <p class="register-text form-element ">
                Already have an account?&nbsp;
              </p>
              <Link class="form-links" to="/login ">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
