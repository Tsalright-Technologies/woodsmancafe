import React from 'react';
import './homepage.scss';
import Woodsman from '../../images/woodsman.jpg';

// put the about owner stuff here
// have the images on the landing page


function Homepage() {

    return (
      <main>
        <div className='welcome-msg'>
          <h2>Welcome to the Woodsman Cafe!</h2>
        </div>
        <div>
          <p>
            Welcome to the Woodsman Cafe, located near the Soo Line Trail in Remer, MN. 
            We pour love into every meal we serve. All our soups and pies are homemade. 
            We use local businesses to supply some of our food, like our hamburger from the local meat market. 
            The Woodsman Cafe is the "Home of the Woody", our signiture breakfast entree featuring two eggs made to order, choice of meat, and hashbrowns. 
            Our entire breakfast menu is available all day. 
            Make sure you stop by and say hi the next time you are in Remer and enjoy dining in the friendly, down to earth atmosphere the Woodsman Cafe provides. 
            We look forward to serving you!
          </p>    
        </div>
        <div className='welcome-image'>
          <img className="woodsman-img" alt='WoodsmanCafe' src={Woodsman}></img>      
        </div>
      </main>
    )
}

export default Homepage;