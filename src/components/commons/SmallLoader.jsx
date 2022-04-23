import ClipLoader from "react-spinners/ClipLoader";

export function SmallLoader() {
  return (
    <div id="smallLoader">
      <div id="loader">
        <ClipLoader color={"#5480f1"} size={20}></ClipLoader>
      </div>
    </div>
  );
}
