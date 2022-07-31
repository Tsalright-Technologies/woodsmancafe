import React from "react";
import './footer.scss'

export default function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <div className="footer-margin">
          <div className="footer-item">
            <h3>Hours</h3>
            <ul>
              <li>M - TH: 6AM - 7PM</li> 
              <li>
                F - Sa: 6AM - 8PM
              </li>
              <li>
                Su: 6AM - 2PM
              </li>
            </ul>
          </div>
          <div className="footer-item">
            <h3>Contact</h3>
            <ul>
              <li>
                Phone: (218) 566-2080
              </li>
              <li>
                Email: woody@woodsmancafe.com              
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
