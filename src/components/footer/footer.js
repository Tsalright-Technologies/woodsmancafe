import React from "react";
import './footer.scss'

export default function Footer() {
  return (
    <>
      <footer className="footerContainer">
        <div className="footer-item">
          <h3>Hours</h3>
          <span>
            M - TH 6AM - 7PM
            <br />
            F - Sa 6AM - 8PM
            <br />
            Su 6AM - 2PM
          </span>
        </div>
        <div className="footer-item">
          <h3>Resources</h3>
          <span>
            Lovin Scoopful
            <br />
            Menu
          </span>
        </div>
        <div className="footer-item">
          <h3>Contact:</h3>
          <span>
            (218) 566-2080
            <br />
            woody@woodsmancafe.com
          </span>
        </div>
      </footer>
    </>
  );
}
