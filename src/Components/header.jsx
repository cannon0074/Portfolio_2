import { useState } from "react";

import "../css/header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <div></div>
        <nav className="Nav">
          <ul className="nav-list">
            <li className="header-content">
              <a href="">test</a>
            </li>
            <li className="header-content">
              <a href="">test</a>
            </li>
            <li className="header-content">
              <a href="">test</a>
            </li>
            <li className="header-content">
              <a href="">test</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
