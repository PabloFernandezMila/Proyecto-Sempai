import { Link } from "react-router-dom";

export function LoginDropDown(props) {
  return (
    <div
      className={props.isLoginDropDownExpanded ? "loginMenuExpanded" : "hidden"}
      onClick={() => {
        props.setIsLoginDropDownExpanded(!props.isLoginDropDownExpanded);
        if (props.isMobile) {
          props.toggleScroll();
        }
      }}
    >
      <p className="roboto-white loginWelcomeMsg">Welcome to Bookshelf</p>
      <div>
        <Link to="/login" className="roboto-white">
          Login
        </Link>
      </div>

      <p className="roboto-white LoginMenuOr">Or</p>
      <div>
        <Link to="/register" className="roboto-white">
          Sign up
        </Link>
      </div>
    </div>
  );
}
