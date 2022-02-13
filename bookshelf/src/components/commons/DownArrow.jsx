import { HashLink } from "react-router-hash-link";
export function DownArrow(props) {
  return (
    <div className=" arrow-container ">
      <HashLink className="bounce down-arrow" to={props.to}></HashLink>
    </div>
  );
}
