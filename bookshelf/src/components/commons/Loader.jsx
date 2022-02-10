import CircleLoader from "react-spinners/CircleLoader";

export function Loader() {
  return (
    <div id="loaderContainer">
      <div id="loader">
        <CircleLoader color={"#5480f1"} size={150}></CircleLoader>
        <span className="roboto-white">Loading...</span>
      </div>
    </div>
  );
}
