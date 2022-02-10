//Import Components
import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import { BookDetails } from "../components/bookLanding/BookDetails";
import { RelatedContent } from "../components/bookLanding/RelatedContent";
import "../assets/styles/bookLanding/bookLanding.css";

//External imports
import { api } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UnderConstructionPage } from "./UnderConstructionPage";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";

export function BookLandingPage(props) {
  //Get book id from params
  const params = useParams();
  let id = params.id;
  //Remove the : character
  let idOnly = id.replace(":", "");
  const [bookFound, setBookFound] = useState(false);

  const [bookInformation, setBookInformation] = useState([]);
  //Get info from Json Server
  useEffect(() => {
    //Get book info using the id to query the DB
    const bookURL = "http://localhost:4000/books?id=" + idOnly;
    api.get(bookURL).then(function (response) {
      const book = response.data;
      setBookFound(book.length > 0);

      //Update list with the book first book returned
      setBookInformation(book[0]);
    });
  }, [idOnly]);

  if (bookFound) {
    // Set of book variables
    const bookBackgroundImageURL = bookInformation.bookBackgroundImageURL;
    const bookTitle = bookInformation.bookTitle;
    const bookFullDescription = "" + bookInformation.bookFullDescription;
    const bookAuthor = bookInformation.bookAuthor;
    const bookCategory = bookInformation.bookCategory;

    return (
      <div className="landingWrapper">
        <Title title={bookTitle} subtitle={"By " + bookAuthor}></Title>
        <Breadcrumb
          firstLinkTo={firstLinkTo}
          firstLinkLabel={firstLinkLabel}
          secondLinkTo={secondLinkTo}
          secondLinkLabel={secondLinkLabel}
        ></Breadcrumb>
        <section className="book-section">
          <BookDetails
            bookBackgroundImageURL={bookBackgroundImageURL}
            bookFullDescription={bookFullDescription}
            bookAuthor={bookAuthor}
            bookCategory={bookCategory}
          ></BookDetails>
          <div className="tags">
            <div>
              <span className="label roboto-white">Author:</span>
              <span>
                <Link to={"/underConstruction"} className="roboto-white tag">
                  {bookAuthor}
                </Link>
              </span>
            </div>
            <div>
              <span className="label roboto-white">Genre: </span>
              <span>
                <Link
                  to={"/catalog"}
                  className="roboto-white tag"
                  //Added useEffect in order to prevent an error while passing the value to the APP component while rendering other component
                  onClick={() =>
                    props.setSelectedFilter(
                      "/books?bookCategory=" + bookCategory
                    )
                  }
                >
                  {bookCategory}
                </Link>
              </span>
            </div>
          </div>
          <RelatedContent
            bookCategory={bookCategory}
            idOnly={idOnly}
          ></RelatedContent>
        </section>
      </div>
    );
  } else {
    return <UnderConstructionPage></UnderConstructionPage>;
  }
}
