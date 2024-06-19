import React from 'react';
import './MobileNavbar.css'
import { useState } from 'react';

function MobileNavbar() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
      setNav(!nav);
    };
  return (
    <div>
      <ul className="mobile-navbar__links">
            <li>
              <a onClick={openNav} href="/">
                Home
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Shop
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Products
              </a>
            </li>
            <li>
              <a onClick={openNav} href="/">
                Pages
              </a>
            </li>
          </ul>
    </div>
  )
}

export default MobileNavbar;