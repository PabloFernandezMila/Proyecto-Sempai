import { Link } from "react-router-dom";

export function RelatedBook(props) {
  const booktitle = props.booktitle;
  const bookauthor = props.bookauthor;
  const id = props.id;
  const bookbackgroundimageurl = props.bookbackgroundimageurl;

  return (
    <div className="related-book">
      <Link to={"/bookLanding/" + id}>
        <img
          className="related-cover"
          src={bookbackgroundimageurl}
          alt={"book cover " + booktitle}
        ></img>
      </Link>
      <Link to={"/bookLanding/" + id} className="related-title roboto-white ">
        {booktitle}
      </Link>
      <Link to={"/bookLanding/" + id} className="related-author roboto-white ">
        {bookauthor}
      </Link>
    </div>
  );
}
