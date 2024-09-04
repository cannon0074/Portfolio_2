import { useState } from "react";

import "../css/header.css";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="header">
        <nav className="Nav">
          <ul className="nav-list">
            <li className="header-content">
              <a href="#about">自己紹介</a>
            </li>
            <li className="header-content">
              <a href="#port">制作物</a>
            </li>
            <li className="header-content">
              <a href="#">???</a>
            </li>
            <li className="header-content">
              <a href="#">???</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
