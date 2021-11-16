import React from 'react';
import LovinScoopful from '../../images/LovinScoopful.jpg';

class Scoopful extends React.Component {
  render() {
    return (
        <main>
        <h2>I am Lovin Scoopful</h2>
        <img src={LovinScoopful} alt="Lovin Scoopful" />
        </main>
    )  
  }
}

export default Scoopful;