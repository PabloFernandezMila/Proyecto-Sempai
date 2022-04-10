import { Link } from "react-router-dom";

export function LoggedDropDown(props) {
  return (
    <div
      className={
        props.isLoginDropDownExpanded ? "loggedMenuExpanded" : "hidden"
      }
      onClick={() =>
        props.setIsLoginDropDownExpanded(!props.isLoginDropDownExpanded)
      }
    >
      <p className="roboto-white loginWelcomeMsg">Welcome to Bookshelf</p>
      <div>
        <Link
          to="/home"
          className="roboto-white"
          onClick={() => {
            localStorage.removeItem("token");
            props.setIsUserLogged(false);
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}
