import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";
const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <main>
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <div className="container">
          <p>Built by DevSteve</p>
        </div>
      </div>
    </main>
  );
};

export default Layout;
