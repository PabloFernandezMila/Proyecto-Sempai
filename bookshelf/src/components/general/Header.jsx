import { useState } from "react";
import "../../assets/styles/general/header.css";

export function Header() {
  //      <--Start of Search scripts-->
  //This state is used to trigger the display of the search field when the search icon is clicked
  let [isSearchExpanded, setSearch] = useState(false);

  //This function is used to close the search are when the area is expanded and the user press escape key
  function pressScapeToCloseSearch(e) {
    var key = e.key;
    if (key === "Escape" && isSearchExpanded) setSearch(!isSearchExpanded);
  }

  //This function is used to expand the search are when the area focused and the user press space bar key
  function pressTabToExpandSearch(e) {
    var key = e.key;
    console.log(key);
    if (key === " " && !isSearchExpanded) e.preventDefault();
    setSearch(!isSearchExpanded);
  }
  //      <--Start of Search scripts-->

  //      <--Start of Hamburger menu scripts-->
  //This function is used to expand or collapse the burger menu on mobile or small screens
  let [isBurgerMenuExpanded, setBurgerMenu] = useState(false);

  function expandBurger() {
    document.body.classList.toggle("js-stop-scrolling");
    var secondRow = document.createElement("div");
    secondRow.id = "header-second-row";
    secondRow.className = "js-header-second-row";
  }

  //      <--End of Hamburger menu scripts-->
  return (
    <header className={isBurgerMenuExpanded ? "js-header-expanded" : ""}>
      <div className="burger-wrapper">
        <div
          id="burger-menu"
          className="js-burger-menu"
          onClick={() => {
            setBurgerMenu(!isBurgerMenuExpanded);
            expandBurger();
          }}
        >
          <div id="burger-menu-icon"></div>
        </div>
      </div>
      <div id="logo-wrapper">
        <a target="_self" id="logo" href="index.html" className="roboto-white">
          Bookshelf
        </a>
      </div>
      <nav style={isBurgerMenuExpanded ? { display: "initial" } : {}}>
        <ul>
          <li className="nav_bar-elements active">
            <a target="_self" href="index.html" className="roboto-white">
              Home
            </a>
          </li>
          <li className="nav_bar-elements inactive">
            <a target="_self" href="catalog.html" className="roboto-white">
              Catalog
            </a>
          </li>
          <li className="nav_bar-elements inactive">
            <a target="_self" href="login.html" className="roboto-white">
              Login
            </a>
          </li>
          <li className="nav_bar-elements inactive">
            <a target="_self" href="about.html" className="roboto-white">
              About
            </a>
          </li>
        </ul>
      </nav>

      {/* The scripts checks if the search was expanded, if true adds a class, if not the class is removed. This allows the system to expand or collapse the search area*/}
      {/* When the search button is clicked the isSearchExpanded variable changes its value to trigger the behaviors mentioned above */}
      <form
        className={
          isSearchExpanded || isBurgerMenuExpanded
            ? "search js-search-form js-expanded"
            : "search js-search-form"
        }
        autoComplete="off"
        style={isBurgerMenuExpanded ? { display: "block" } : {}}
      >
        <div
          className="search-button js-search-button"
          tabIndex="0"
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
              : {}
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
            onKeyDown={(e) => pressScapeToCloseSearch(e)}
          />
        </div>
      </form>
      <div id="login-wrapper">
        <a href="/login.html" className="bounce">
          {" "}
        </a>
      </div>
    </header>
  );
}
