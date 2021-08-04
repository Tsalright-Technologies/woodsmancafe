import React from "react";
import "./header.scss";

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="headerContainer">
      <h1 className="logo">THE WOODSMAN CAFE</h1>
      <nav>
        <ul>
          <li>
            <NavLink className="navLinks" to='/'>Home</NavLink>
          </li>
          <li className="dropdown">
            <NavLink className="dropbtn navLinks" to='/'>Menu</NavLink>
            <div className='dropdown-content'>
              <NavLink className="subMenu" to='/kids-menu'>Kids Menu</NavLink>
              <NavLink className="subMenu" to='/breakfast-menu'>Breakfast Menu</NavLink>
              <NavLink className="subMenu" to='/lunch-menu'>Lunch Menu</NavLink>
              <NavLink className="subMenu" to='/dinner-menu'>Dinner Menu</NavLink>
            </div>
          </li>
          <li>
            <NavLink className="navLinks" to='/lovin-scoopful'>Lovin Scoopful</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
