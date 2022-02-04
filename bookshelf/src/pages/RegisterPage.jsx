import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import { RegisterForm } from "../components/register/RegisterForm";

// Title Variables
const registerTitle = "Register";
const registerSubtitle = "Please complete the following form";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/register";
const secondLinkLabel = "Register";

export function Register() {
  return (
    <div className="register-container tint">
      <Title title={registerTitle} subtitle={registerSubtitle}></Title>
      <Breadcrumb
        firstLinkTo={firstLinkTo}
        firstLinkLabel={firstLinkLabel}
        secondLinkTo={secondLinkTo}
        secondLinkLabel={secondLinkLabel}
      ></Breadcrumb>
      <RegisterForm></RegisterForm>
    </div>
  );
}
