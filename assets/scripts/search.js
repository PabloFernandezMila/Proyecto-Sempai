/* Define the elements to be used */
const searchForm = document.querySelector(".js-search-form");
const searchButton = document.querySelector(".js-search-button");
const searchField = document.querySelector(".js-search-input");
const loginWrapper = document.getElementById("login-wrapper");

searchButton.addEventListener("click", function() {
    /* When the icon of search is clicked, the search area is expanded or collapsed */
    searchForm.classList.toggle('js-expanded');
    /* When the search field is expanded, the script sets the focus on the input field*/
    if (searchForm.classList.contains("js-expanded")) {

        document.getElementById("search-text").focus();
        loginWrapper.style.display = "none";
    } else {
        loginWrapper.style.display = "flex";
    }

});

/* If the user press Escape key, the search area is collapsed */
window.onkeyup = function(event) {
    if (event.keyCode == 27) {
        loginWrapper.style.display = "flex";
        searchForm.classList.toggle('js-expanded');
        searchField.value = '';

    }
}