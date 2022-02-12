import { Link } from "react-router-dom";
import "../../assets/styles/bookLanding/bookDetails.css";

export function BookDetails(props) {
  const bookBackgroundImageURL = props.bookBackgroundImageURL;
  const bookFullDescription = props.bookFullDescription;

  return (
    <>
      <div className="book-cover">
        <img src={bookBackgroundImageURL} alt="Book Cover"></img>
      </div>
      <div className="buttons-container">
        <div>
          <Link id="wishlist" to="/underConstruction" class="roboto-white">
            Add to Wishlist
          </Link>
        </div>
        <div>
          <Link
            id="request-book"
            to="/underConstruction"
            className="roboto-white"
          >
            Add to Library
          </Link>
        </div>
      </div>
      <div className="book-info">
        <div className="book-information">
          <h3 className="roboto-white">Description</h3>
          {bookFullDescription.split("\n").map((paragraph, i) => (
            <p key={i} className="roboto-white">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
