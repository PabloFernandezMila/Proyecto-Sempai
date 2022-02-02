import "../../assets/styles/about/breadcrumb.css";

export function Breadcrumb() {
  return (
    <div id="breadcrumb-wrapper">
      <ul className="breadcrumb">
        <li>
          <a target="_self" href="index.html" className="roboto-white .about-a">
            Home
          </a>
        </li>
        <li>
          <p className="roboto-white breadcrumb-separator">&nbsp;/&nbsp;</p>
        </li>
        <li>
          <a target="_self" href="" className="roboto-white .about-a">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
