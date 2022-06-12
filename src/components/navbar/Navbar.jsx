import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"
function Navbar() {
  return (
    <div>
      <div className="navbar-style d-flex align-items-center justify-content-center">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              ABOUT US
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              FOR YOU
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">
              SERVİCES
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">BLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">VLOG</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="www.google.com">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
