# Welcome to Bookshelf 2.0

In the following section will find the documentation for each page.
The site is responsive adjusting its components in order to fit pc and mobile browsers

Json server url-> localhost:4000

All books information is retrieved from the Json server, also user name for mobile menu

<---Pages--->

# Home Page

The home page is divided on 3 sections. The first two have an arrow to scroll to the following section
-The Welcome section is static date
-Start today section has information and a button that redirects to the Login page
-The last section has information and a button that redirects to the catalog page

# Catalog

-Catalog list all the available books on JsonServer file
-Here the user can filter by genre, using the Select dropdown by default all books are listed with the Select a genre option
-Also the user can hover on a book card to see more information, the system will retrieve the description from the server, if description it is too long it will be trim and added an ellipsis at the end of the string this is to prevent that larger text get out of the container
-The user can get to the catalog by clicking on the Genre of a book on the book landing page, in this case the user will be redirected to the catalog page and the dropdown will select the genre clicked by the user, the catalog is filtered by this genre

# Book Landing page

Here the user can see the book details in depth
Related section, on this section the user can select a related book, if clicked the user will be redirected to the book landing page
The user can click on the Genre of the book and will be redirected to the catalog filtered by that genre
Add to wishlist and add to library are not implemented yet (Work in progress)

# Login (Work in progress)

Layout is finished
Email format validation
Redirect to the Register page
Redirection to the home page after completing the form

# About

Static data page

# Register

Layout is finished
Email format validation
Redirect to the Login page
Redirection to the home page after completing the form

<---Common Components--->

# Header

Header has the logo, navbar, search and login on screens wider that 1000px, for smaller screens it has burger menu. When expanded the scroll is disabled and the header takes the screen full height, if the user selects an option of the navbar or taps on the burger, the menu is closed

The search icon can be clicked and this will expand the search area for pc and focus on it, on mobile the search area is already expanded but not focused, to prevent that the keyboard is displayed.

# Header > Search

The search icon can be clicked and this will expand the search area for pc and focus on it, on mobile the search area is already expanded but not focused, to prevent that the keyboard is displayed.

Also added keyboard support, users can tab to the icon and press spacebar to expand or escape to collapse

Search is not working yet, users will be redirected to UnderConstruction page

# Header > Greeting

The greeting component will take the name from the DB and is used on mobile burger for now until Login is implemented, for demo purposes

# Header > Profile icon

Added dropdown where the user can login or create an account

# Footer

Footer has the social media links buttons and copyright text

# Loaders

Implemented loaders on Catalog grid and book landing page, loaders animations were imported from https://www.npmjs.com/package/react-spinners
