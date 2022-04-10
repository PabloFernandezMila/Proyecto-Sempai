import "../../assets/styles/login/login.css";
import { Link, useNavigate } from "react-router-dom";
import { RequiredInput } from "../commons/RequiredInput";
import { api } from "../../api/api.js";
import { useState } from "react";
import { SmallLoader } from "../commons/SmallLoader";

export function LoginForm() {
  //Form States
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisabledButton] = useState(false);

  let navigate = useNavigate();

  const loginAttempt = (event) => {
    event.preventDefault();
    setLoading(true);
    setDisabledButton(true);
    //Delete  error
    setError("");

    //Send post with entered information
    api
      .post("/auth/login", {
        email: inputEmail,
        password: inputPassword,
      })
      .then(
        (response) => {
          setLoading(false);
          setDisabledButton(false);

          //TODO revisar
          localStorage.setItem("token", response.data.token);
          navigate("../home", { replace: true });
        },
        (errorResponse) => {
          //Save error
          const response = errorResponse.response.data;

          //Display error
          setError(response.error);
          setLoading(false);
          setDisabledButton(false);
        }
      );
  };

  //Form Handlers
  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <section id="login-content">
      <div className="login-wrapper flex-item roboto-white tint">
        <form action="/home" autoComplete="off" onSubmit={loginAttempt}>
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
              value={inputEmail}
              onChange={handleInputEmail}
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
              value={inputPassword}
              onChange={handleInputPassword}
            ></RequiredInput>

            <button
              type="submit"
              className={
                disableButton
                  ? "disabled register-button roboto-white form-element"
                  : "register-button roboto-white form-element "
              }
              disabled={disableButton}
              style={{ cursor: "default" }}
            >
              {loading ? (
                <SmallLoader style={{ padding: 0 }}></SmallLoader>
              ) : (
                "Login"
              )}
            </button>
            <div className="errorMessage">{error}</div>
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
