import { useEffect, useState } from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    !toggle
      ? document.querySelector(".content").classList.add("pad")
      : document.querySelector(".content").classList.remove("pad");

    toggle
      ? document.body.classList.add("no-scroll")
      : document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [toggle]);

  return (
    <>
      <header className={!toggle ? "fixed" : null}>
        <nav>
          <div className="logo">
            <NavLink to="/">
              <img src="../imgs/logo.svg" alt="logo" />
            </NavLink>
          </div>
          <div className="nav_links">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              About
            </NavLink>
            <NavLink
              to="/submit"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              Submit
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active_link" : "")}
            >
              Contact
            </NavLink>
          </div>

          <div className="search_bar">
            <form action="">
              <input type="search" placeholder="search..." />
            </form>
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
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active_link" : "")}
              onClick={handleToggle}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active_link" : "")}
              onClick={handleToggle}
            >
              About
            </NavLink>
            <NavLink
              to="/submit"
              className={({ isActive }) => (isActive ? "active_link" : "")}
              onClick={handleToggle}
            >
              Submit
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active_link" : "")}
              onClick={handleToggle}
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
