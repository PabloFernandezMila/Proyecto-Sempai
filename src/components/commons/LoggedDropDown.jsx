import { Link } from "react-router-dom";

export function LoggedDropDown(props) {
  return (
    <div
      className={props.isLoginDropDownExpanded ? "loginMenuExpanded" : "hidden"}
      onClick={() =>
        props.setIsLoginDropDownExpanded(!props.isLoginDropDownExpanded)
      }
    >
      <p className="roboto-white loginWelcomeMsg">Welcome to Bookshelf</p>
      <div>
        <Link
          to="/home"
          className="roboto-white"
          onClick={() => localStorage.removeItem("token")}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
