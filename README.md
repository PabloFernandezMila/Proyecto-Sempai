# Welcome to Bookshelf 3.0 UI 

In the following section will find the documentation for each page.
The site is responsive adjusting its components in order to fit pc and mobile browsers

All information is retrieved from the DB using endpoints of the API, so in order to work properly the API and DB must be running.

## Pages

### Home Page

The home page is divided on 3 sections. The first two have an arrow to scroll to the following section:

- The Welcome section is static date
- Start today section has information and a button that redirects to the Login page
- The last section has information and a button that redirects to the catalog page

### Catalog

- Catalog list all the available books on DB
- Here the user can filter by genre, using the Select dropdown by default all books are listed with the Select a genre option
- Also the user can hover on a book card to see more information, the system will retrieve the description from the server, if description it is too long it will be trim and added an ellipsis at the end of the string this is to prevent that larger text get out of the container
- The user can get to the catalog by clicking on the Genre of a book on the book landing page, in this case the user will be redirected to the catalog page and the dropdown will select the genre clicked by the user, the catalog is filtered by this genre

### Book Landing page

- Here the user can see the book details in depth
- Related section, on this section the user can select a related book, if clicked the user will be redirected to the book landing page
- The user can click on the Genre of the book and will be redirected to the catalog filtered by that genre
- Add to wishlist and add to library are now implemented
- 
### Login 

- Layout is finished
- Email format validation
- Email and password validation with error messages from API responses
- Redirect to the Register page
- Redirection to the home page after completing the form
- Forgot password is not implemented, the user is redirected to a generic page indicating that that feature is coming soon

### About

Static data page

### Register

- Layout is finished
- Existing email validation
- Redirect to the Login page
- Redirection to the home page after completing the form

## Common Components

### Header

- Header has the logo, navbar, search and login on screens wider that 1000px, for smaller screens it has burger menu. When expanded the scroll is disabled and the header takes the screen full height, if the user selects an option of the navbar or taps on the burger, the menu is closed.
- The search icon can be clicked and this will expand the search area for pc and focus on it, on mobile the search area is already expanded but not focused, to prevent that the keyboard is displayed.

### Header > Search

-The search icon can be clicked and this will expand the search area for pc and focus on it, on mobile the search area is already expanded but not focused, to prevent that the keyboard is displayed.

- Also added keyboard support, users can tab to the icon and press spacebar to expand or escape to collapse

- Search is now working yet, users will be redirected to Search page. Searchs by Title, Author and Description on the DB 

### Header > Greeting

- The greeting component takes the name from the DB and is used on mobile burger 

### Header > Profile icon

- Added dropdown where the user can login or create an account
- If user logged in the dropdown changes, adding link to Wishlist, Library, and Logout

### Footer

- Footer has the social media links buttons and copyright text

### Loaders

- Implemented loaders for pages and buttons, loaders animations were imported from https://www.npmjs.com/package/react-spinners

### Animations

- Added animation so the site looks more "alive"
