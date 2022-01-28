import "../../assets/styles/general/footer.css"

export function Footer (){
    return (  
     <footer>
        <div>
            <ul>
                <li className="social-media">
                    <a  id="facebook" className="bounce" href="https://www.facebook.com/senpaiacademy"> </a>
                </li>
                <li className="social-media">
                    <a id="github" className="bounce" href="https://github.com/PabloFernandezMila/Proyecto-Sempai/tree/Dev"> </a>
                </li>
                <li className="social-media">
                    <a id="linkedin" className="bounce" href="https://www.linkedin.com/in/pablo-fernandez-mila-6a9a5251/"> </a>
                </li>
            </ul>
            <p id="footer-copyright">Pablo Fernandez 2021 © All rights reserved</p>

        </div>
    </footer>);
}