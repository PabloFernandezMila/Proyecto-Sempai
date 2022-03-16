import "../../assets/styles/common/footer.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li className="social-media">
            <Link
              id="facebook"
              className="bounce"
              to="https://www.facebook.com/senpaiacademy"
            ></Link>
          </li>
          <li className="social-media">
            <Link
              id="github"
              className="bounce"
              to="https://github.com/PabloFernandezMila/Proyecto-Sempai/tree/Dev"
            ></Link>
          </li>
          <li className="social-media">
            <Link
              id="linkedin"
              className="bounce"
              to="https://www.linkedin.com/in/pablo-fernandez-mila-6a9a5251/"
            ></Link>
          </li>
        </ul>
        <p id="footer-copyright">Pablo Fernandez 2021 © All rights reserved</p>
      </div>
    </footer>
  );
}
