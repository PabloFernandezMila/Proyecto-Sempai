import "../../assets/styles/about/title.css";
import { Breadcrumb } from "./Breadcrumb";

export function Title() {
  return (
    <div id="about-title-wrapper">
      <div className="about-title">
        <h1 className="roboto-white about-h1">About Bookshelf</h1>
        <h2 className="roboto-white about-h2">
          Our goal is to share our passion for books with everyone anywhere
        </h2>
      </div>
      <Breadcrumb></Breadcrumb>
    </div>
  );
}
