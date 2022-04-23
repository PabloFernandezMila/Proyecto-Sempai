import { Link } from "react-router-dom";
import "../assets/styles/pageNotFound/pageNotFound.css";
export function Error() {
  return (
    <div id="pageNotFound-wrapper">
      <div>
        <h1 className={"roboto-white"}>Unable to connect with server </h1>
        <h1 className={"roboto-white"}>Please try again later</h1>
      </div>
      <div>
        <Link to={"/home"} className={"roboto-white"}>
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
}
