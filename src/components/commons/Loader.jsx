import ClipLoader from "react-spinners/ClipLoader";

export function Loader() {
  return (
    <div id="loaderContainer">
      <div id="loader">
        <ClipLoader color={"#5480f1"} size={10}></ClipLoader>
        <span className="roboto-white">Loading...</span>
      </div>
    </div>
  );
}
