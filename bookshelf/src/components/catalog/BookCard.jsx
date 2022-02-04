import { Link } from "react-router-dom";
export function BookCard() {
  return (
    <div className="book-wrapper grow">
      <div
        className="book grow"
        style={{ backgroundImage: "url(/images/catalog/bookcover1.jpg)" }}
      >
        <div className="book-content roboto-white centered">
          <h3>Title</h3>
          <p className="book-title">A Game of Thrones</p>
          <h3>Description</h3>
          <p>
            A Game of Thrones is the first novel in A Song of Ice and Fire, a
            series of fantasy novels by the American author George R. R. Martin.
          </p>
          <h3>Author</h3>
          <p className="book-author">George R.R. Martin</p>
          <Link to="/bookLanding" className="roboto-white">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
}
