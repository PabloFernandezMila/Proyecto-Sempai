import { Link } from "react-router-dom";
import "../../assets/styles/bookLanding/bookDetails.css";

export function BookDetails(props) {
  const bookbackgroundimageurl = props.bookbackgroundimageurl;
  const bookfulldescription = props.bookfulldescription;

  return (
    <>
      <div className="book-cover">
        <img src={bookbackgroundimageurl} alt="Book Cover"></img>
      </div>
      <div className="buttons-container">
        <div className="button-link">
          <Link id="wishlist" to="/wishlist" className="roboto-white">
            Add to Wishlist
          </Link>
        </div>
        <div className="button-link">
          <Link id="request-book" to="/myLibrary" className="roboto-white">
            Add to Library
          </Link>
        </div>
      </div>
      <div className="book-info">
        <div className="book-information">
          <h3 className="roboto-white">Description</h3>

          {/* In order to look better added the \n  string on description to determine when a paragraph ends */}
          {bookfulldescription.split("\\n").map((paragraph, i) => (
            <p key={i} className="roboto-white">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
