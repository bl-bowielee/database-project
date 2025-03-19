import flower from "../../Assets/images/aster.png";
import "./header.scss"

const Header = () => {
  return (
      <header className="header">
          <img src={flower} alt="aster" className="logo" />
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                  <li><a href="/services">Human Resources</a></li>
                  <li><a href="/contact">Cart</a></li>
              </ul>
          </nav>
      </header>
  );
}

export default Header;
