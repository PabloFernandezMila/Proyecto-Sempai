import { useNavigate } from "react-router-dom";
import { api } from "../api/api";
import { Title } from "../components/commons/Title";
import { Breadcrumb } from "../components/commons/Breadcrumb";
import "../assets/styles/myLibrary/myLibrary.css";
import { Table } from "../components/commons/table/Table";
import { Loader } from "../components/commons/Loader";
import { useEffect } from "react";
import { useState } from "react";
import jwt_decode from "jwt-decode";

// Breadcrumb variables
const firstLinkTo = "/home";
const firstLinkLabel = "Home";
const secondLinkTo = "/catalog";
const secondLinkLabel = "Catalog";
let loggedUserEmail = "notLogged";

export function MyLibrary(props) {
  const [userNamDB, setUserName] = useState("");
  let navigate = useNavigate();

  //Get user id
  if (typeof localStorage.getItem("token") === "string") {
    const jwt = localStorage.getItem("token");
    const jwtDecoded = jwt_decode(jwt);
    loggedUserEmail = jwtDecoded.email;
  }

  useEffect(() => {
    //Get user info using the id to query the DB
    const userIDURL =
      "http://localhost:4000/users/" + loggedUserEmail + "/name";
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
  }, [loggedUserEmail]);

  const [booksList, setBookList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  //Get info from Server
  useEffect(() => {
    //Get books
    //Display loader by setting it true
    setLoading(true);
    api
      .get("http://localhost:4000/myLibrary/" + loggedUserEmail, {
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
      .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          if (error.response.status === 401 || error.response.status === 400) {
            navigate("../login", { replace: true });
          }
        }
      });
  }, [navigate, loggedUserEmail]);

  const table =
    booksList.length > 0 ? (
      <Table
        booksList={
          booksList
        } /* Pass the parameters to catalog in order to filter the view */
        selectedFilter={props.selectedFilter}
        setSelectedFilter={props.setSelectedFilter}
        removeEndpoint={"myLibrary/remove"}
      ></Table>
    ) : (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="roboto-white"> Your Library is empty</h1>
        <h2 className="roboto-white">
          Please add books from the book landing page
        </h2>
      </div>
    );

  return (
    <div className="myLibraryWrapper">
      {accessGranted ? (
        <>
          <div className="myLibrary-title-wrapper tint">
            <Title title={userNamDB + "'s myLibrary"}></Title>
            <Breadcrumb
              firstLinkTo={firstLinkTo}
              firstLinkLabel={firstLinkLabel}
              secondLinkTo={secondLinkTo}
              secondLinkLabel={secondLinkLabel}
            ></Breadcrumb>
          </div>
          <section className="myLibrarySection">
            <>{loading ? <Loader></Loader> : table}</>
          </section>
        </>
      ) : (
        //If user is not logged in, the app displays a loader instead of any myLibrary component
        <div style={{ paddingTop: "35vh" }}>
          <Loader></Loader>
        </div>
      )}
    </div>
  );
}
