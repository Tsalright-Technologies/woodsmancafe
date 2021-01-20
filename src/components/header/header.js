import React from "react";
import "./header.scss";

import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="headerContainer">
      <h1 className="logo">THE WOODSMAN CAFE</h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <NavLink to='/lovinscoopful'>Lovin Scoopful</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/menu'>Menu</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
