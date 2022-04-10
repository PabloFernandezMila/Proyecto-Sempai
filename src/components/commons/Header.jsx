import { useState } from "react";
import "../../assets/styles/common/header.css";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Greeting } from "./Greeting";
import { LoginDropDown } from "./LoginDropDown";
import { LoggedDropDown } from "./LoggedDropDown";
//

export function Header() {
  // Start of Search scripts

  //This state is used to trigger the display of the search field when the search icon is clicked
  let [isSearchExpanded, setSearch] = useState(false);
  let [isLoginDropDownExpanded, setIsLoginDropDownExpanded] = useState(false);
  let [userLoggedIn, setUserLoggedIn] = useState(false);

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

  function checkToken() {
    localStorage.getItem("token") != null
      ? setUserLoggedIn(true)
      : setUserLoggedIn(false);
    console.log(userLoggedIn);
  }

  // End of Hamburger menu scripts

  return (
    <header
      onClick={checkToken}
      className={
        isBurgerMenuExpanded ? "js-header-expanded slideInFromLeft" : ""
      }
    >
      <div className="burger-wrapper">
        <div
          id="burger-menu"
          className="js-burger-menu"
          //When the user clicks on the burger menu, the burger menu is expanded or collapsesd
          onClick={toggleBurgerMenu}
        >
          <div id="burger-menu-icon"></div>
        </div>
      </div>
      <Greeting
        isBurgerMenuExpanded={isBurgerMenuExpanded}
        userLoggedIn={userLoggedIn}
      ></Greeting>
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
            style={!userLoggedIn ? { display: "initial" } : { display: "none" }}
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
        action="/underConstruction"
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
      >
        <div
          className="search-button js-search-button"
          tabIndex="0"
          //When the user clicks on the Avatar icon, the search area is hidden, to leave room for the profile drop down, also if the user navigated with the keyboard
          onClick={() => setSearch(!isSearchExpanded)}
          onKeyDown={(e) => pressTabToExpandSearch(e)}
        >
          <div className="search-button-image"></div>
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
            placeholder="Title, author or genres"
            className="roboto-white js-search-input"
            maxLength="35"
            style={
              isSearchExpanded ? { display: "initial" } : { display: "block" }
            }
            //If the user press scape the search is closed
            onKeyDown={(e) => pressScapeToCloseSearch(e)}
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
          setIsLoginDropDownExpanded(!isLoginDropDownExpanded);
          setSearch(false);
        }}
      >
        <div className="bounce"></div>
      </div>
      {userLoggedIn ? (
        <LoggedDropDown
          isLoginDropDownExpanded={isLoginDropDownExpanded}
          setIsLoginDropDownExpanded={setIsLoginDropDownExpanded}
        ></LoggedDropDown>
      ) : (
        <LoginDropDown
          isLoginDropDownExpanded={isLoginDropDownExpanded}
          setIsLoginDropDownExpanded={setIsLoginDropDownExpanded}
        ></LoginDropDown>
      )}
    </header>
  );
}
