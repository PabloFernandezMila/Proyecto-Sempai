import { useState } from "react";
import { api } from "../../api/api";
import { useEffect } from "react";

export function Greeting(props) {
  const [userNamDB, setUserName] = useState("");

  useEffect(() => {
    //Get user info using the id to query the DB
    const userIDURL = "http://localhost:4000/users?userID=" + "1";
    api.get(userIDURL).then(function (response) {
      const user = response.data;
      //Set the name using the first result, later will use user ID
      setUserName(user[0].userName);
    });
  }, []);
  return (
    <div
      id="greeting-user"
      className="roboto-white"
      style={
        props.isBurgerMenuExpanded
          ? { display: "initial" }
          : { display: "none" }
      }
    >
      <p>Welcome {userNamDB}</p>
    </div>
  );
}
