import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    toggle
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [toggle]);

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <Link to="/">
              <img src="../imgs/logo.svg" alt="logo" />
            </Link>
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
        <nav className="mb_nav">
          <div
            className={toggle ? `toggler_mb active` : "toggler_mb"}
            onClick={handleToggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={toggle ? "nav_links_mb show" : "nav_links_mb"}>
            <div className="close">
              <img src="../imgs/close.png" alt="close" onClick={handleToggle} />
            </div>
            <Link to="/" onClick={handleToggle}>
              Home
            </Link>
            <Link to="/about" onClick={handleToggle}>
              About
            </Link>
            <Link to="/submit" onClick={handleToggle}>
              Submit
            </Link>
            <Link to="/contact" onClick={handleToggle}>
              Contact
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
