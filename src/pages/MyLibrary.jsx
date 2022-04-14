import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import "../assets/styles/wishlist/wishlist.css";
import { Table } from "../components/commons/table/Table";
import { Loader } from "../components/commons/Loader";
import { useEffect } from "react";
import { useState } from "react";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";

export function MyLibrary(props) {
  const [userNamDB, setUserName] = useState("");

  //This variable emulates having an logged in user ID
  const loggedUserID = 2;

  useEffect(() => {
    //Get user info using the id to query the DB
    const userIDURL = "http://localhost:4000/users/" + loggedUserID + "/name";
    api
      .get(userIDURL)
      .then(function (response) {
        //Set the name
        if (response.status === 200) {
          setUserName(response.data.userName);
        }
      })
      .catch((error) => {
        setUserName("to Bookshelf");
      });
  }, []);

  let navigate = useNavigate();
  const [booksList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  //Get info from Server
  useEffect(() => {
    //Get books
    //Display loader by setting it true
    setLoading(true);
    //This prop is the filtered URL
    api
      .get("http://localhost:4000/myLibrary/", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        setAccessGranted(true);
        const books = response.data;
        //Hide loader by setting it  false
        setLoading(false);
        //Update list with the books retrieved from the server
        setBookList(books);
      })
      .catch((error) => {
        //Catch login errors
        if (
          error.response.data.status === 401 ||
          error.response.data.status === 400
        ) {
          navigate("../login", { replace: true });
        }
      });
  }, [navigate]);

  const table =
    booksList.length > 0 ? (
      <Table
        booksList={
          booksList
        } /* Pass the parameters to catalog in order to filter the view */
        selectedFilter={props.selectedFilter}
        setSelectedFilter={props.setSelectedFilter}
      ></Table>
    ) : (
      <div>
        <h1 className="roboto-white"> Your library is empty</h1>
        <h2 className="roboto-white">
          Please add books from the book landing page
        </h2>
      </div>
    );

  return (
    <div className="wishlistWrapper">
      {accessGranted ? (
        <>
          <div className="wishlist-title-wrapper tint">
            <Title title={userNamDB + "'s Library"}></Title>
            <Breadcrumb
              firstLinkTo={firstLinkTo}
              firstLinkLabel={firstLinkLabel}
              secondLinkTo={secondLinkTo}
              secondLinkLabel={secondLinkLabel}
            ></Breadcrumb>
          </div>
          <section className="wishlistSection">
            <>{loading ? <Loader></Loader> : table}</>
          </section>
        </>
      ) : (
        //If user is not logged in, the app displays a loader instead of any wishlist component
        <div style={{ paddingTop: "35vh" }}>
          <Loader></Loader>
        </div>
      )}
    </div>
  );
}
