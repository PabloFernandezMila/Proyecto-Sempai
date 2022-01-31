/* Define the elements to be used */

const burgerMenu = document.querySelector(".js-burger-menu");
const header = document.querySelector("header")
const navBar = document.querySelector("header>nav")
const login = document.querySelector("#search-login")
const search = document.querySelector('.search')
const searchInput = document.querySelector(".js-search-input");



/* Listen if the burger menu is clicked */
burgerMenu.addEventListener("click", () => {
    /* When the burger is clicked the scroll is disabled, this with the css styles allows to cover the whole screen with the mobile header */
    // document.body.classList.toggle("js-stop-scrolling");

    var secondRow = document.createElement("div");

    /* Toggle classes to apply styles */
    //    header.classList.toggle("js-header-expanded")

    /* Create the div that will contain the navBar and search section */
    secondRow.id = "header-second-row";
    secondRow.className = "js-header-second-row"

    /* If the header has the class expanded the script will append the div, and also move the navbar and the search inside of it */
    if (header.classList.contains('js-header-expanded')) {

        /* Add the new div to header */
        header.appendChild(secondRow)
            /* Move the search area to the new row added */
        secondRow.appendChild(search)
            /* By default the search are is displayed expanded on mobile */
            // search.classList.toggle('js-expanded');
            /* By default on mobile the search is hidden so the script makes the elements visible again */
            //search.style.display = "block";
        searchInput.style.display = "initial";

        /* Also add the navbar below the search area */
        secondRow.appendChild(navBar)

    } else {
        /* Move the navbar to its original location */
        header.insertBefore(navBar, login)

        /* reset search styles */
        search.style.display = 'none'
        search.classList.toggle('js-expanded')

        /* Locate the appended div and remove it */
        const appendedSecondRow = document.querySelector('#header-second-row')
        appendedSecondRow.remove()

    }







})