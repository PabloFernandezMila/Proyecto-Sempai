import { Link } from "react-router-dom";
export function ComingSoon() {
  return (
    <div id="pageNotFound-wrapper">
      <div>
        <h1 className={"roboto-white"}>Coming soon! </h1>
        <h1 className={"roboto-white"}>Arriving soon </h1>
      </div>
      <div>
        <Link to={"/home"} className={"roboto-white"}>
          Go back to HomePage
        </Link>
      </div>
    </div>
  );
}
