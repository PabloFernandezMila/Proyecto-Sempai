import "../../assets/styles/bookLanding/bookDetails.css";
import { api } from "../../api/api";
import { useState } from "react";
import jwt_decode from "jwt-decode";
import { SmallLoader } from "../commons/SmallLoader";

export function BookDetails(props) {
  const bookbackgroundimageurl = props.bookbackgroundimageurl;
  const bookfulldescription = props.bookfulldescription;
  const id = props.bookid;
  const [error, setError] = useState("");
  const [loadingWishlist, setLoadingWishlist] = useState(false);
  const [loadingLibrary, setLoadingLibrary] = useState(false);
  const [disableButtonWishlist, setDisabledButtonWishlist] = useState(false);
  const [disableButtonLibrary, setDisabledButtonLibrary] = useState(false);
  const [responseMessageWishlist, setResponseMessageWishlist] = useState("");
  const [responseMessageLibrary, setResponseMessageLibrary] = useState("");
  let loggedUserEmail = "Guest";

  function addToWishlist() {
    //Get user id
    if (typeof localStorage.getItem("token") === "string") {
      const jwt = localStorage.getItem("token");
      const jwtDecoded = jwt_decode(jwt);
      loggedUserEmail = jwtDecoded.email;
    }

    setLoadingWishlist(true);
    setDisabledButtonWishlist(true);
    //Delete  error
    setError("");
    //Send post with email to identify the user and the id of the books to be added
    api
      .post(
        "/wishlist/add",
        {
          email: loggedUserEmail,
          id: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(
        (response) => {
          setLoadingWishlist(false);
          setDisabledButtonWishlist(false);
          setResponseMessageWishlist(response.data.message);
        },
        (errorResponse) => {
          //Save error
          const response = errorResponse.response;

          //Display error
          setError(response.error);
          setLoadingWishlist(false);
          setDisabledButtonWishlist(false);
          console.log(response.status);
          // Request made and server responded
          if (response.status === 401 || response.status === 400) {
            setResponseMessageWishlist("Please Login");
          } else {
            setResponseMessageWishlist("Error");
          }
        }
      );
  }

  function addToLibrary() {
    //Get user id
    if (typeof localStorage.getItem("token") === "string") {
      const jwt = localStorage.getItem("token");
      const jwtDecoded = jwt_decode(jwt);
      loggedUserEmail = jwtDecoded.email;
    }

    setLoadingLibrary(true);
    setDisabledButtonLibrary(true);
    //Delete  error
    setError("");
    //Send post with email to identify the user and the id of the books to be added
    api
      .post(
        "/myLibrary/add",
        {
          email: loggedUserEmail,
          id: id,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(
        (response) => {
          setLoadingLibrary(false);
          setDisabledButtonLibrary(false);
          setResponseMessageLibrary(response.data.message);
        },
        (errorResponse) => {
          //Save error
          const response = errorResponse.response;

          //Display error
          setError(response.error);
          setLoadingLibrary(false);
          setDisabledButtonLibrary(false);
          if (response.status === 401 || response.status === 400) {
            setResponseMessageLibrary("Please Login");
          } else {
            setResponseMessageLibrary("Error");
          }
        }
      );
  }

  return (
    <>
      <div className="book-cover">
        <img src={bookbackgroundimageurl} alt="Book Cover"></img>
      </div>
      <div className="buttons-container">
        <div className="button-link">
          <button
            onClick={addToWishlist}
            id="wishlist"
            to="/wishlist"
            className={
              disableButtonWishlist ? "disabled roboto-white" : "roboto-white"
            }
            disabled={disableButtonWishlist}
          >
            {loadingWishlist ? (
              <SmallLoader style={{ padding: 0 }}></SmallLoader>
            ) : (
              "Add to Wishlist"
            )}
          </button>
          <span className="roboto-white bookDetails-responseMessage">
            {responseMessageWishlist}
          </span>
        </div>
        <div className="button-link">
          <button
            onClick={addToLibrary}
            id="request-book"
            to="/myLibrary"
            className={
              disableButtonLibrary ? "disabled roboto-white" : "roboto-white"
            }
            disabled={disableButtonLibrary}
          >
            {loadingLibrary ? (
              <SmallLoader style={{ padding: 0 }}></SmallLoader>
            ) : (
              "Add to Library"
            )}
          </button>
          <span className="roboto-white bookDetails-responseMessage">
            {responseMessageLibrary}
          </span>
        </div>
      </div>
      <div className="book-info">
        <div className="book-information">
          <h3 className="roboto-white">Description</h3>

          {/* In order to look better added the \n  string on description to determine when a paragraph ends */}
          {bookfulldescription.split("\\n").map((paragraph, i) => (
            <p key={i} className="roboto-white">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
