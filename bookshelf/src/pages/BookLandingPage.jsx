import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import "../assets/styles/bookLanding.css";
import { api } from "../api/api";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";
// Book variables

export function BookLandingPage() {
  const params = useParams();
  let id = params.id;
  let idOnly = id.replace(":", "");
  const [bookInformation, setBookInformation] = useState([]);
  //Get info from Json Server
  useEffect(() => {
    //Get book info
    const bookURL = "http://localhost:4000/books?id=" + idOnly;
    api.get(bookURL).then(function (response) {
      const book = response.data;

      //Update list with the book first book returned
      setBookInformation(book[0]);
    });
  }, []);

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
        <div className="book-cover">
          <img src={bookBackgroundImageURL} alt="Book Cover"></img>
        </div>
        <div className="buttons-container">
          <button type="button" id="wishlist">
            Add to Wishlist
          </button>
          <button type="button" id="request-book">
            Add to Library
          </button>
        </div>
        <div className="book-info">
          <div className="book-information">
            <h3 className="roboto-white">Description</h3>
            {bookFullDescription.split("\n").map((item, i) => (
              <p key={i} className="roboto-white">
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="tags">
          <div>
            <span className="label roboto-white">Author:</span>
            <span>
              <a href="George R.R. Martin" className="roboto-white tag">
                {bookAuthor}
              </a>
            </span>
          </div>
          <div>
            <span className="label roboto-white">Genre:</span>
            <span>
              <a href="Fantasy" className="roboto-white tag">
                {bookCategory}
              </a>
            </span>
          </div>
        </div>

        <div className="related-content roboto-white">
          <h2>Related content</h2>
          <hr></hr>
          <div className="related-content-container">
            <div className="related-book">
              <a href="theWiseManFear" className="related-cover"></a>
              <a href="theWiseManFear" className="related-title roboto-white ">
                The Wise Man&apos;s Fear
              </a>
              <a
                href="patrickRothfuss"
                className="related-author roboto-white "
              >
                Patrick Rothfuss
              </a>
            </div>

            <div className="related-book">
              <a href="theReturnOfTheKing" className="related-cover "></a>
              <a
                href="theReturnOfTheKing"
                className="related-title roboto-white "
              >
                The Return of the King
              </a>
              <a href="JRRTolkien" className="related-author roboto-white ">
                J.R.R Tolkien
              </a>
            </div>

            <div className="related-book">
              <a href="aQuestOfHeroes" className="related-cover "></a>
              <a href="aQuestOfHeroes" className="related-title roboto-white ">
                A Quest of Heroes
              </a>
              <a href="morganRice" className="related-author roboto-white ">
                Morgan Rice
              </a>
            </div>

            <div className="related-book">
              <a href="temeraire" className="related-cover "></a>
              <a href="temeraire" className="related-title roboto-white ">
                Temeraire
              </a>
              <a href="naomiNovik" className="related-author roboto-white ">
                Naomi Novik
              </a>
            </div>

            <div className="related-book">
              <a href="theWhiteRaven" className="related-cover"></a>
              <a href="theWhiteRaven" className="related-title roboto-white">
                The white raven
              </a>
              <a href="carrieDMiller" className="related-author roboto-white">
                Carrie D. Miller
              </a>
            </div>

            <div className="related-book">
              <a href="theWinterKing" className="related-cover"></a>
              <a href="theWinterKing" className="related-title roboto-white">
                The winter king
              </a>
              <a href="cohen" className="related-author roboto-white">
                Cohen
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
