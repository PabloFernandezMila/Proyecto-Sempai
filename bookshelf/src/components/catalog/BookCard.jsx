import { Link } from "react-router-dom";

export function BookCard(props) {
  const id = props.id;
  const bookBackgroundImageURL = props.bookBackgroundImageURL;
  const bookTitle = props.bookTitle;
  let bookDescription = props.bookDescription;
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
          <p>
            {bookDescription.length > 200
              ? (bookDescription = bookDescription.substring(0, 200) + "...")
              : bookDescription}
          </p>
          <h3>Author</h3>
          <p className="book-author">{bookAuthor}</p>
          <Link to={"/bookLanding/:" + id} className="roboto-white">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
