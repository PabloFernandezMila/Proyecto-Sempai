import "../../assets/styles/common/title.css";
import { Breadcrumb } from "./Breadcrumb";

export function Title(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  return (
    <div id="title-wrapper">
      <div className="title">
        <h1 className="roboto-white title-h1">{title}</h1>
        <h2 className="roboto-white title-h2">{subtitle}</h2>
      </div>
    </div>
  );
}
