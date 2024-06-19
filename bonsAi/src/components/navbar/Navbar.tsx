import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import "./Navbar.css";

import MobileNavbar from "./mobilenavbar/MobileNavbar";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <MobileNavbar />
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
          <a href="/" onClick={() => window.scrollTo(0, 0)}> 
             
            </a>
          </div>
          <ul className="navbar__links">
            <li>
              <a className="home-link" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="about-link" href="#about">
                Shop
              </a>
            </li>
            <li>
              <a className="models-link" href="#products">
                Products
              </a>
            </li>
            <li>
              <a className="testi-link" href="#testimonials">
                Pages
              </a>
            </li>
          </ul>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} color="#000"/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;