import { Link } from "react-router-dom";

export function Tags(props) {
  const bookAuthor = props.bookAuthor;
  const bookCategory = props.bookCategory;
  return (
    <div className="tags">
      <div>
        <span className="label roboto-white">Author:</span>
        <span>
          <Link to={"/underConstruction"} className="roboto-white tag">
            {bookAuthor}
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
              props.setSelectedFilter("/books/categories/" + bookCategory)
            }
          >
            {bookCategory}
          </Link>
        </span>
      </div>
    </div>
  );
}
