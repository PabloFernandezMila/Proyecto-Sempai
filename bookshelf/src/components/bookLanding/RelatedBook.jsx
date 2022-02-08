import { Link } from "react-router-dom";

export function RelatedBook(props) {
  const title = props.title;
  const author = props.author;
  const id = props.id;
  const bookBackgroundImageURL = props.bookBackgroundImageURL;

  return (
    <div className="related-book">
      <Link
        to={"/bookLanding/:" + id}
        className="related-cover"
        style={{ backgroundImage: "url(" + bookBackgroundImageURL + ")" }}
      ></Link>
      <Link to={"/bookLanding/:" + id} className="related-title roboto-white ">
        {title}
      </Link>
      <Link to={"/bookLanding/:" + id} className="related-author roboto-white ">
        {author}
      </Link>
    </div>
  );
}
