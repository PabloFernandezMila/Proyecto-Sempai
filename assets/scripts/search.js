/* Define the elements to be used */
const searchForm = document.querySelector(".js-search-form");
const searchButton = document.querySelector(".js-search-button");
const searchField = document.querySelector(".js-search-input");
const loginWrapper = document.getElementById("login-wrapper");



/* This function expand or collapse the search area */
function expandAndCollapseSearch() {
    /* When the icon of search is clicked, the search area is expanded or collapsed, this behavior is triggered by js-expanded class */
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
}

searchButton.addEventListener("click", function() {
    expandAndCollapseSearch();

});

/* If the user press Escape key, the search area is collapsed and the field cleared */
searchField.addEventListener('keydown', function(event) {
    if (event.keyCode == 27 && searchForm.classList.contains("js-expanded")) {
        /* The login section is displayed again */
        loginWrapper.style.display = "flex";
        searchForm.classList.toggle('js-expanded');
        /* Search field is cleared */
        searchField.value = '';
        searchField.style.display = "none";
    }
    /*If the search form is collapsed, the script hide the search field and returns the login to its initial state*/
    if (!searchForm.classList.contains("js-expanded")) {
        loginWrapper.style.display = "flex";
        searchField.style.display = "none";

    }

})

/* If the user press spacebar key, the search area is displayed */
searchButton.addEventListener('keydown', function(event) {
    if (event.keyCode == 32) {
        /* Prevent the scroll down */

        event.preventDefault();
        /* When the icon of search is clicked, the search area is expanded or collapsed */
        expandAndCollapseSearch();


    }

})