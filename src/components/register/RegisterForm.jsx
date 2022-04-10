import { Link, useNavigate } from "react-router-dom";
import "../../assets/styles/register/register.css";
import { RequiredInput } from "../commons/RequiredInput";
import { api } from "../../api/api.js";
import { useState } from "react";
import { SmallLoader } from "../commons/SmallLoader";

export function RegisterForm() {
  //Form States
  const [inputName, setInputName] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisabledButton] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setDisabledButton(true);
    //Delete  error
    setError("");

    //Send post with entered information
    api
      .post("/auth/register", {
        name: inputName,
        lastname: inputLastname,
        email: inputEmail,
        password: inputPassword,
      })
      .then(
        (response) => {
          setLoading(false);
          setDisabledButton(false);
          navigate("../home", { replace: true });
        },
        (errorResponse) => {
          //Guardamos la respuesta de la api en una constante
          const response = errorResponse.response.data;

          //Cambiamos el estado para mostrar el error
          setError(response.error);
          setLoading(false);
          setDisabledButton(false);
        }
      );
  };

  //Form Handlers
  const handleInputName = (event) => {
    setInputName(event.target.value);
  };

  const handleInputLastname = (event) => {
    setInputLastname(event.target.value);
  };

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  return (
    <section id="register-content">
      <div className="signin flex-item roboto-white tint">
        <form autoComplete="off" onSubmit={handleSubmit}>
          {/* TODO add profile picture upload */}
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
              value={inputName}
              onChange={handleInputName}
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
              value={inputLastname}
              onChange={handleInputLastname}
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
              value={inputEmail}
              onChange={handleInputEmail}
            ></RequiredInput>

            <label className="form-element ">
              <b>Password</b>
            </label>
            <RequiredInput
              className="form-element "
              type="password"
              placeholder="Enter your Password "
              name="password "
              id="password "
              autoComplete="off"
              value={inputPassword}
              onChange={handleInputPassword}
            ></RequiredInput>

            <button
              type="submit "
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
                "Sign up"
              )}
            </button>

            <div className="errorMessage">{error}</div>

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
