import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/underConstruction/underConstruction.css";
import { api } from "../api/api";
import { useEffect } from "react";
export function WishList() {
  let navigate = useNavigate();
  useEffect(() => {
    //Get book info using the id to query the DB

    api
      .get("http://localhost:4000/wishlist", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(function (response) {})
      .catch((err) => {
        navigate("../login", { replace: true });
        //TODO save route so user does not have to navigate after login
      });
  });
  return (
    <div id="underConstruction-wrapper">
      <h1 className="roboto-white">WishList</h1>
      <div id="underConstruction-image"></div>
      <div>
        <Link to={"/home"} className={"roboto-white"}>
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
}
