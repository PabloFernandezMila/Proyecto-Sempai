import { Link } from "react-router-dom";

export function Tags(props) {
  const bookauthor = props.bookauthor;
  const bookcategory = props.bookcategory;
  return (
    <div className="tags">
      <div>
        <span className="label roboto-white">Author:</span>
        <span>
          <Link to={"/comingSoon"} className="roboto-white tag">
            {bookauthor}
            {/* TODO Add UI for book Author */}
          </Link>
        </span>
      </div>
      <div>
        <span className="label roboto-white">Genre: </span>
        <span>
          <Link
            to={"/catalog"}
            className="roboto-white tag"
            onClick={() =>
              props.setSelectedFilter("/books/categories/" + bookcategory)
            }
          >
            {bookcategory}
          </Link>
        </span>
      </div>
    </div>
  );
}
