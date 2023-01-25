import React from 'react';
import './homepage.scss';
import Woody from '../../images/woody.jpg';
import Logger from '../../images/logger.jpg';

// put the about owner stuff here
// have the images on the landing page


function Homepage() {

    return (
      <main>
        <section className='content-main'>
          <div className='content-main-item'>
            <h2 className='content-title'>Welcome to the Woodsman Cafe!</h2>
            <p>
              Welcome to the Woodsman Cafe, located near the Soo Line Trail in Remer, MN. 
              We pour love into every meal we serve. All our soups and pies are homemade. 
              We use local businesses to supply some of our food, like our hamburger from TC's Grocery.. 
              The Woodsman Cafe is the "Home of the Woody", our signiture breakfast entree featuring two eggs made to order, choice of meat, and hashbrowns. 
              Our entire breakfast menu is available all day. 
              Make sure you stop by and say hi the next time you are in Remer and enjoy dining in the friendly, down to earth atmosphere the Woodsman Cafe provides. 
              We look forward to serving you!
            </p>  
          </div>
        </section>
        
        <section className='content-images'>
          <img className='rounded-image' alt='Woody Breakfast' src={Woody}></img>
          <img className='rounded-image' alt='Logger Burger' src={Logger}></img>
        </section>
      </main>
    )
}

export default Homepage;