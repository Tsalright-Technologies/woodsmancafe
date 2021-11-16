import React from 'react';
import Woodsman from '../../images/woodsman.jpg';
import './homepage.scss';
import omlette from "../../images/mexican_omlette.jpg"
import logger from "../../images/logger.jpg"

// put the about owner stuff here
// have the images on the landing page


function Homepage() {

    return (
      <main>
        <div className='welcome-msg'>
          <h2>Welcome to the Woodsman Cafe!</h2>
        </div>
        <div className='welcome-image'>
          <img className="woodsman-img" alt='WoodsmanCafe' src={Woodsman}></img>
          <p>This is just filler text for when there will be a welcome message to greet visitors as they enter into the Woodsmand Cafe Website!! I am extremely excited to get something up and running for Bob and Julie.</p>
          
        </div>
        <section>
          <img className="omlette" alt="Mexican Omlette" src={omlette} />
          <img className="Logger" alt="Logger" src={logger}/>
        </section>
      
      </main>
    )
}

export default Homepage;