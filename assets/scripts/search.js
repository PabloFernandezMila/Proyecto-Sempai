/* Define the elements to be used */
const searchForm = document.querySelector(".js-search-form");
const searchButton = document.querySelector(".js-search-button");
const searchField = document.querySelector(".js-search-input");
const loginWrapper = document.getElementById("login-wrapper");



searchButton.addEventListener("click", function() {
    /* When the icon of search is clicked, the search area is expanded or collapsed */
    searchForm.classList.toggle('js-expanded');
    /* When the search field is expanded, the script makes the field visible and sets the focus on the input field*/
    if (searchForm.classList.contains("js-expanded")) {
        searchField.style.display = "initial";
        searchField.focus();
        /* If the search is expanded the login section is hidden */
        loginWrapper.style.display = "none";
    }
    /* The else is used for when the search is already expanded and the user clicks again on the search icon */
    else {
        loginWrapper.style.display = "flex";
        searchField.style.display = "none";

    }

});

/* If the user press Escape key, the search area is collapsed and the field cleared */
window.onkeyup = function(event) {
    if (event.keyCode == 27 && searchForm.classList.contains("js-expanded")) {
        /* The login section is displayed again */
        loginWrapper.style.display = "flex";
        searchForm.classList.toggle('js-expanded');
        searchField.value = '';
        searchField.style.display = "none";

    }
}