import { Link } from "react-router-dom";

export function BookCard(props) {
  const id = props.id;
  const bookbackgroundimageurl = props.bookbackgroundimageurl;
  const booktitle = props.booktitle;
  let bookdescription = props.bookdescription;
  const bookauthor = props.bookauthor;

  return (
    <div className="book-wrapper grow">
      <div
        className="book grow"
        style={{ backgroundImage: "url(" + bookbackgroundimageurl + ")" }}
      >
        <div className="book-content roboto-white centered">
          <h3>title</h3>
          <p className="book-title">{booktitle}</p>
          <h3>Description</h3>
          <p>
            {/* Trim the description in order to fit the card */}
            {bookdescription.length > 200
              ? (bookdescription = bookdescription.substring(0, 200) + "...")
              : bookdescription}
          </p>
          <h3>Author</h3>
          <p className="book-author">{bookauthor}</p>
          <Link to={"/bookLanding/" + id} className="roboto-white">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
