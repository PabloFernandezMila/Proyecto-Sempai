import { Link } from "react-router-dom";

export function RelatedBook(props) {
  const bookTitle = props.bookTitle;
  const bookAuthor = props.bookAuthor;
  const id = props.id;
  const bookBackgroundImageURL = props.bookBackgroundImageURL;

  return (
    <div className="related-book">
      <Link
        to={"/bookLanding/:" + id}
        className="related-cover"
        style={{ backgroundImage: "url(" + bookBackgroundImageURL + ")" }}
      ></Link>
      <Link to={"/bookLanding/" + id} className="related-title roboto-white ">
        {bookTitle}
      </Link>
      <Link to={"/bookLanding/" + id} className="related-author roboto-white ">
        {bookAuthor}
      </Link>
    </div>
  );
}
