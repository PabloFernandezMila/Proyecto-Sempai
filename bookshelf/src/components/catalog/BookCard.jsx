import { Link } from "react-router-dom";
export function BookCard(props) {
  const bookBackgroundImageURL = props.bookBackgroundImageURL;
  const bookTitle = props.bookTitle;
  const bookDescription = props.bookDescription;
  const bookAuthor = props.bookAuthor;

  return (
    <div className="book-wrapper grow">
      <div
        className="book grow"
        style={{ backgroundImage: "url(" + bookBackgroundImageURL + ")" }}
      >
        <div className="book-content roboto-white centered">
          <h3>title</h3>
          <p className="book-title">{bookTitle}</p>
          <h3>Description</h3>
          <p>{bookDescription}</p>
          <h3>Author</h3>
          <p className="book-author">{bookAuthor}</p>
          <Link to="/bookLanding" className="roboto-white">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
