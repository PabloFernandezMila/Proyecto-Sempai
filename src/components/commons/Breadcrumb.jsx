import "../../assets/styles/common/breadcrumb.css";
import { Link } from "react-router-dom";

export function Breadcrumb(props) {
  const firstLinkTo = props.firstLinkTo;
  const firstLinkLabel = props.firstLinkLabel;
  const secondLinkTo = props.secondLinkTo;
  const secondLinkLabel = props.secondLinkLabel;

  return (
    <div id="breadcrumb-wrapper">
      <ul className="breadcrumb">
        <li>
          <Link to={firstLinkTo} className="roboto-white .breadcrumb-a">
            {firstLinkLabel}
          </Link>
        </li>
        <li>
          <p className="roboto-white breadcrumb-separator">&nbsp;/&nbsp;</p>
        </li>
        <li>
          <Link to={secondLinkTo} className="roboto-white .breadcrumb-a">
            {secondLinkLabel}
          </Link>
        </li>
      </ul>
    </div>
  );
}
