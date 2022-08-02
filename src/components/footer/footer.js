import React from "react";
import './footer.scss'

import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title">Hours</h2>
            <ul>
              <li>M - TH: 6AM - 7PM</li> 
              <li>F - Sa: 6AM - 8PM</li>
              <li>Su: 6AM - 2PM</li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Navigation</h2>
            <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/kids-menu'>Kids Menu</NavLink></li>
              <li><NavLink to='/breakfast-menu'>Breakfast Menu</NavLink></li>
              <li><NavLink to='/main-menu'>Main Menu</NavLink></li>
              <li><NavLink to='/lovin-scoopful'>Lovin Scoopful</NavLink></li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Contact</h2>
            <ul>
              <li>Phone: (218) 566-2080</li>
              <li>Email: <a href="mailto:woody@woodsmancafe.com">woody@woodsmancafe.com</a></li>
            </ul>
          </div>
        </section>

        {/* <section class="ft-social">
          <ul class="ft-social-list">
            <li><a href="#"><i class="fab fa-facebook"></i></a></li>
          </ul>
        </section> */}

        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li>&copy; 2022 Copyright Woodsman Cafe</li>
          </ul>
        </section>
      </footer>
    </>
  );
}
