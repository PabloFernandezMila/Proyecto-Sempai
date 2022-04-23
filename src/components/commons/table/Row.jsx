import { Link } from "react-router-dom";
import { api } from "../../../api/api";
import jwt_decode from "jwt-decode";

export function Row(props) {
  const bookBackgroundImageURL = props.bookBackgroundImageURL;
  const bookTitle = props.bookTitle;
  const bookAuthor = props.bookAuthor;
  const bookCategory = props.bookCategory;
  const id = props.id;
  const removeEndpoint = props.removeEndpoint;

  function remove(id) {
    //Get user id
    const jwt = localStorage.getItem("token");
    const jwtDecoded = jwt_decode(jwt);
    const loggedUserEmail = jwtDecoded.email;

    api
      .delete("http://localhost:4000/" + removeEndpoint, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: {
          email: loggedUserEmail,
          id: id,
        },
      })
      .then(() => window.location.reload(false));
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
          onClick={() => remove(id)}
          style={{ width: "100px" }}
        ></div>
      </div>
    </div>
  );
}
