import { Link } from "react-router-dom";
import { api } from "../../../api/api";

export function Row(props) {
  const bookBackgroundImageURL = props.bookBackgroundImageURL;
  const bookTitle = props.bookTitle;
  const bookAuthor = props.bookAuthor;
  const bookCategory = props.bookCategory;
  const id = props.id;

  function removeFromWishlist(id) {
    api
      .delete("http://localhost:4000/wishlist/" + id, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => console.log("Delete successful"));
  }
  return (
    <div className="roboto-white wishlists-grid-row">
      <div style={{ width: "20vw" }}>
        <Link
          to={"/bookLanding/" + id}
          className="roboto-white wishlists-title"
        >
          {bookTitle}
        </Link>
      </div>
      <div style={{ width: "20vw" }}>
        <Link
          to={"/bookLanding/" + id}
          className="roboto-white wishlists-author"
        >
          {bookAuthor}
        </Link>
      </div>
      <div style={{ width: "20vw" }}>
        <Link
          to={"/catalog"}
          className="roboto-white wishlists-category"
          onClick={() =>
            props.setSelectedFilter("/books/categories/" + bookCategory)
          }
        >
          {bookCategory}
        </Link>
      </div>
      <div className="roboto-white wishlist-bookCover">
        <div className="mobileOnly"></div>
        <Link
          style={{
            backgroundImage: "url(" + bookBackgroundImageURL + ")",
            width: "125px",
          }}
          to={"/bookLanding/" + id}
          className="roboto-white wishlist-bookCover-Link"
        ></Link>
      </div>
      <div className="removeFromWishlistWrapper">
        <div className="mobileOnly"></div>
        <div
          className="removeFromWishlist"
          onClick={() => removeFromWishlist(id)}
          style={{ width: "100px" }}
        ></div>
      </div>
    </div>
  );
}
