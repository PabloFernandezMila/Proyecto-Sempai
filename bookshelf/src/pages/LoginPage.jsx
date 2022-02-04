import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import { LoginForm } from "../components/login/LoginForm";

// Title Variables
const loginTitle = "Login";
const loginSubtitle = "Please enter your email and password";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/login";
const secondLinkLabel = "Login";

export function LoginPage() {
  return (
    <div className="login-container tint">
      <Title title={loginTitle} subtitle={loginSubtitle}></Title>
      <Breadcrumb
        firstLinkTo={firstLinkTo}
        firstLinkLabel={firstLinkLabel}
        secondLinkTo={secondLinkTo}
        secondLinkLabel={secondLinkLabel}
      ></Breadcrumb>
      <LoginForm></LoginForm>
    </div>
  );
}
