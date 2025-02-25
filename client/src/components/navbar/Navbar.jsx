import "./Navbar.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src="../imgs/logo.svg" alt="logo" />
          </div>
          <div className="nav_links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/submit">Submit</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="search_bar">
            <input type="search" placeholder="search..." />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
