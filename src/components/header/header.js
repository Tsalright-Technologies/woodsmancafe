import React from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 className="hd-title">THE WOODSMAN CAFE</h1>
      <nav className="menu-area">
        <ul>
          <li><NavLink className="hd-links" to='/'>Home</NavLink></li>
          <li><NavLink className="hd-links" to='/main-menu'>Menu</NavLink>
            <ul className="dropdown">
              <li><NavLink className="subMenu" to='/kids-menu'>Kids Menu</NavLink></li>
              <li><NavLink className="subMenu" to='/breakfast-menu'>Breakfast Menu</NavLink></li>
              <li><NavLink className="subMenu" to='/main-menu'>Main Menu</NavLink></li>
              <li><NavLink className="subMenu" to='/dinner-menu'>Dinner Menu</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
