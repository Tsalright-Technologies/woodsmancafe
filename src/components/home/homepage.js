import React from 'react';
import Woodsman from '../../images/woodsman.jpg';
import './homepage.scss';


function Homepage() {

    return (
      <main>
        <div className='welcome-image'>
          <h2>Welcome to the Woodsman Cafe!</h2>
          <br />
          <img alt='WoodsmanCafe' src={Woodsman}></img>
        </div>
      
      </main>
    )
}

export default Homepage;