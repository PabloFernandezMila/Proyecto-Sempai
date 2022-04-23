import { Link } from "react-router-dom";
import { Greeting } from "../commons/Greeting";

export function LoggedDropDown(props) {
  const greetingStyle = "roboto-white loginWelcomeMsg";
  return (
    <div
      className={
        props.isLoginDropDownExpanded ? "loggedMenuExpanded" : "hidden"
      }
      onClick={() => {
        props.setIsLoginDropDownExpanded(!props.isLoginDropDownExpanded);
        if (props.isMobile) {
          props.toggleScroll();
        }
      }}
    >
      <Greeting greetingStyle={greetingStyle}></Greeting>

      <div>
        <Link to="/wishlist" className="roboto-white">
          Wishlist
        </Link>
      </div>
      <div>
        <Link to="/mylibrary" className="roboto-white">
          Library
        </Link>
      </div>
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
