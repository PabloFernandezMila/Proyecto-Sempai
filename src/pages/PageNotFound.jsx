import { Link } from "react-router-dom";
import "../assets/styles/pageNotFound/pageNotFound.css";
export function PageNotFound() {
  return (
    <div id="pageNotFound-wrapper">
      <div>
        <h1 className={"roboto-white"}>ERROR 404 </h1>
        <h1 className={"roboto-white"}>Page not found </h1>
      </div>
      <div>
        <Link to={"/home"} className={"roboto-white"}>
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
}
