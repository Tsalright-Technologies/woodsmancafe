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
          <p>
            Whether you are taking a road trip on Highway 200, vacationing in the area, or adventuring on the Soo Line Trail, the Woodsman Cafe is worth the stop. 
          </p>

          <div>
            Embedded Social Media and Travel Reviews (Facebook, TripAdvisor, Yelp, Google)
          </div>
        </div>
      </main>
    )
}

export default Homepage;