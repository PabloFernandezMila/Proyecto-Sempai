//Import Components
import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import { BookDetails } from "../components/bookLanding/BookDetails";
import { RelatedContent } from "../components/bookLanding/RelatedContent";
import { Tags } from "../components/bookLanding/Tags";
import { Loader } from "../components/commons/Loader";
import { PageNotFound } from "./PageNotFound";
import { useNavigate } from "react-router-dom";

//Import styles
import "../assets/styles/bookLanding/bookLanding.css";

//External imports
import { api } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";

export function BookLandingPage(props) {
  //Get book id from params
  const params = useParams();

  let navigate = useNavigate();

  //State added to control if the url redirects to an id existing on the DB
  const [bookFound, setBookFound] = useState(false);
  const [bookInformation, setBookInformation] = useState([]);
  const [loading, setLoading] = useState(false);
  //Get info from Json Server
  useEffect(() => {
    setLoading(true);
    //Get book info using the id to query the DB
    const bookURL = "http://localhost:4000/books/" + params.id;
    api
      .get(bookURL, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        if (response.status === 200) {
          const book = response.data;
          //Update list with the book first book returned
          setBookInformation(book);
          setBookFound(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        if (error.message === "Network Error") {
          navigate("../error", { replace: true });
        }
        console.log("Unable to retrieve the book with id " + params.id);
      });
  }, [params.id, navigate]);
  let bookFoundData;
  //If the book is found on the DB the system returns the book details
  if (bookFound) {
    // Set of book variables
    const bookbackgroundimageurl = bookInformation.bookbackgroundimageurl;
    const booktitle = bookInformation.booktitle;
    const bookfulldescription = "" + bookInformation.bookfulldescription;
    const bookauthor = bookInformation.bookauthor;
    const bookcategory = bookInformation.categoryname;

    //Moved book data to a variable to make easier to read the returns
    bookFoundData = (
      <div className="landingWrapper">
        <Title title={booktitle} subtitle={"By " + bookauthor}></Title>
        <Breadcrumb
          firstLinkTo={firstLinkTo}
          firstLinkLabel={firstLinkLabel}
          secondLinkTo={secondLinkTo}
          secondLinkLabel={secondLinkLabel}
        ></Breadcrumb>
        <section className="book-section">
          <BookDetails
            bookbackgroundimageurl={bookbackgroundimageurl}
            bookfulldescription={bookfulldescription}
            bookAuthor={bookauthor}
            bookcategory={bookcategory}
            bookid={params.id}
          ></BookDetails>
          <Tags
            bookauthor={bookauthor}
            bookcategory={bookcategory}
            setSelectedFilter={props.setSelectedFilter}
          ></Tags>
          <RelatedContent
            bookcategory={bookcategory}
            idOnly={params.id}
          ></RelatedContent>
        </section>
      </div>
    );
  }

  // If the book is not found the system redirects to the Page no found component
  const content = bookFound ? (
    <div className="landingWrapper flex-centered">{bookFoundData}</div>
  ) : (
    <PageNotFound></PageNotFound>
  );

  if (loading)
    return (
      <div className="landingWrapper flex-centered">
        <Loader></Loader>
      </div>
    );
  else {
    return content;
  }
}
