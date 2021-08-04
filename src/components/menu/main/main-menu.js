import React from "react";
import Logger from "../../../images/logger.jpg";
import Chili from "../../../images/chili.jpg";


function LunchMenu() {
  return (
    <>
      <main>
      <h1>I am the Lunch Menu</h1>
      <img src={Logger} alt="Logger"/>
      <img src={Chili} alt="Chili"/>
      </main>
    </> 
  )
}

export default LunchMenu;