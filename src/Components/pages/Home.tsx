import { Link } from "react-router-dom";
import "./Home.css";
function HomePage() {
  return (
    <div className="mainHomeContainer">
      <div className="navigation">
        <nav>
          <ul>
            <li>
              <Link className="link-style" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/contato">
                Contato
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/empresa">
                Empresa
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container0">
        <p>Home page</p>
      </div>
    </div>
  );
}

export default HomePage;
