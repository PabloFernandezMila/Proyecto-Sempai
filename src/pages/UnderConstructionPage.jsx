import { Link } from "react-router-dom";
import "../assets/styles/underConstruction/underConstruction.css";
export function UnderConstructionPage() {
  return (
    <div id="underConstruction-wrapper">
      <div id="underConstruction-image"></div>
      <div>
        <Link to={"/home"} className={"roboto-white"}>
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
}
