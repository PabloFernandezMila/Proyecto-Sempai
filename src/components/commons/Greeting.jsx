import { useState } from "react";
import { api } from "../../api/api";

let loggedUserEmail = "";

export function Greeting(props) {
  const [userNamDB, setUserName] = useState("to Bookshelf");
  const myToken = localStorage.getItem("token");
  if (myToken != null && myToken !== "undefined") {
    const jsonToken = JSON.parse(atob(myToken.split(".")[1]));
    loggedUserEmail = jsonToken.email;

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
      .catch((error) => {});
  }
  return (
    <>
      <p className={props.greetingStyle}>Welcome {userNamDB}</p>
    </>
  );
}
