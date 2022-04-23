import { useState } from "react";
import "../../assets/styles/common/header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Greeting } from "./Greeting";
import { LoginDropDown } from "./LoginDropDown";
import { LoggedDropDown } from "./LoggedDropDown";

//

export function Header(props) {
  let navigate = useNavigate();
  // Start of Search scripts
  const [searchTyping, setSearchTyping] = useState("");

  //Form Handlers
  const handleInputSearch = (event) => {
    setSearchTyping(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    props.setInputSearch(searchTyping);
    if (isBurgerMenuExpanded) {
      toggleBurgerMenu();
    }
    setSearch(false);
    navigate("../searchresults", { replace: true });
  };

  //This state is used to trigger the display of the search field when the search icon is clicked
  let [isSearchExpanded, setSearch] = useState(false);
  let [isLoginDropDownExpanded, setIsLoginDropDownExpanded] = useState(false);
  let isMobile = window.innerWidth < 1000;
  //This function is used to close the search area when the area is expanded and the user press escape key
  function pressScapeToCloseSearch(e) {
    var key = e.key;
    if (key === "Escape" && isSearchExpanded) setSearch(!isSearchExpanded);
  }

  //This function is used to expand the search are when the area focused and the user press space bar key
  function pressTabToExpandSearch(e) {
    var key = e.key;
    e.preventDefault();
    if (key === " " && !isSearchExpanded) setSearch(!isSearchExpanded);
  }
  // End of Search scripts

  // Start of Hamburger menu scripts
  //This function is used to expand or collapse the burger menu on small screens
  let [isBurgerMenuExpanded, setBurgerMenu] = useState(false);

  function toggleBurgerMenu() {
    document.body.classList.toggle("js-stop-scrolling");
    setBurgerMenu(!isBurgerMenuExpanded);
  }

  function toggleScroll() {
    document.body.classList.toggle("js-stop-scrolling");
  }

  // End of Hamburger menu scripts

  return (
    <header
      className={
        isBurgerMenuExpanded ? "js-header-expanded slideInFromLeft" : ""
      }
    >
      <div className="burger-wrapper">
        <div
          id="burger-menu"
          className="js-burger-menu"
          //When the user clicks on the burger menu, the burger menu is expanded or collapsed
          onClick={toggleBurgerMenu}
        >
          <div id="burger-menu-icon"></div>
        </div>
      </div>
      <div
        id="greeting-user"
        className="roboto-white"
        style={
          isBurgerMenuExpanded ? { display: "initial" } : { display: "none" }
        }
      >
        <Greeting></Greeting>
      </div>

      <div id="logo-wrapper">
        <HashLink
          id="logo"
          className="roboto-white"
          to={"/home#section1"}
          //When the burger menu is expanded, if the user clicks on the logo, the burger menu is collapsed
          onClick={isBurgerMenuExpanded ? toggleBurgerMenu : null}
        >
          Bookshelf
        </HashLink>
      </div>
      <nav style={isBurgerMenuExpanded ? { display: "initial" } : null}>
        <ul>
          <li className="nav_bar-elements">
            <NavLink
              className="roboto-white"
              to={"/home"}
              activeclassname="active"
              //If the menu is expanded, the burger menu is closed after user click on a link
              onClick={isBurgerMenuExpanded ? toggleBurgerMenu : null}
            >
              Home
            </NavLink>
          </li>
          <li className="nav_bar-elements">
            <NavLink
              to={"/catalog"}
              className="roboto-white"
              activeclassname="active"
              //If the menu is expanded, the burger menu is closed after user click on a link
              onClick={isBurgerMenuExpanded ? toggleBurgerMenu : null}
            >
              Catalog
            </NavLink>
          </li>
          <li
            className="nav_bar-elements"
            style={
              props.isUserLogged ? { display: "none" } : { display: "initial" }
            }
          >
            <NavLink
              className="roboto-white"
              to={"/login"}
              activeclassname="active"
              //If the menu is expanded, the burger menu is closed after user click on a link
              onClick={isBurgerMenuExpanded ? toggleBurgerMenu : null}
            >
              Login
            </NavLink>
          </li>
          <li className="nav_bar-elements">
            <NavLink
              className="roboto-white"
              to={"/about"}
              activeclassname="active"
              //If the menu is expanded, the burger menu is closed after user click on a link
              onClick={isBurgerMenuExpanded ? toggleBurgerMenu : null}
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* The scripts checks if the search was expanded, if true adds a class, if not the class is removed. This allows the system to expand or collapse the search area*/}
      {/* When the search button is clicked the isSearchExpanded variable changes its value to trigger the behaviors mentioned above */}
      <form
        action="/comingSoon"
        className={
          isSearchExpanded || isBurgerMenuExpanded
            ? "search js-search-form js-expanded"
            : "search js-search-form"
        }
        style={
          isSearchExpanded || isBurgerMenuExpanded
            ? { display: "initial" }
            : null
        }
        autoComplete="off"
        onSubmit={handleSearchSubmit}
      >
        <div
          className="search-button js-search-button"
          tabIndex="0"
          //When the user clicks on the Avatar icon, the search area is hidden, to leave room for the profile drop down, also if the user navigated with the keyboard
          onClick={() => setSearch(!isSearchExpanded)}
          onKeyDown={(e) => pressTabToExpandSearch(e)}
        >
          <div
            className="search-button-image"
            style={
              isLoginDropDownExpanded
                ? { visibility: "hidden" }
                : { visibility: "visible" }
            }
          ></div>
        </div>
        <div
          className="search-field roboto-white"
          style={
            isSearchExpanded || isBurgerMenuExpanded
              ? { display: "initial" }
              : null
          }
        >
          {/* ref was added to allow the system to focus the input field when it is expanded. Also the style is changed when the search icon is clicked*/}
          <input
            ref={
              !isBurgerMenuExpanded
                ? (input) => input && input.focus()
                : (input) => input
            }
            id="search-text"
            type="text"
            placeholder="Title, author or description"
            className="roboto-white js-search-input"
            maxLength="35"
            style={
              isSearchExpanded ? { display: "initial" } : { display: "block" }
            }
            //If the user press scape the search is closed
            onKeyDown={(e) => pressScapeToCloseSearch(e)}
            onChange={handleInputSearch}
          />
        </div>
      </form>
      <div
        style={
          isBurgerMenuExpanded ? { display: "none" } : { display: "initial" }
        }
        id="login-wrapper"
        //If the user clicks on the avatar, the login menu is expanded, and if the search is expanded, it will collapse the search
        onClick={() => {
          if (isMobile) {
            toggleScroll();
          }
          setIsLoginDropDownExpanded(!isLoginDropDownExpanded);
          setSearch(false);
        }}
      >
        <div
          className="bounce"
          style={
            isLoginDropDownExpanded
              ? { visibility: "hidden" }
              : { visibility: "visible" }
          }
        ></div>
      </div>
      {props.isUserLogged ? (
        <LoggedDropDown
          toggleScroll={toggleScroll}
          isLoginDropDownExpanded={isLoginDropDownExpanded}
          setIsLoginDropDownExpanded={setIsLoginDropDownExpanded}
          isUserLogged={props.isUserLogged}
          setIsUserLogged={props.setIsUserLogged}
          isMobile={isMobile}
        ></LoggedDropDown>
      ) : (
        <LoginDropDown
          toggleScroll={toggleScroll}
          isMobile={isMobile}
          isLoginDropDownExpanded={isLoginDropDownExpanded}
          setIsLoginDropDownExpanded={setIsLoginDropDownExpanded}
        ></LoginDropDown>
      )}
    </header>
  );
}
