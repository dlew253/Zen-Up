import React from 'react';
import Image from '../assets/zen-up-circles.png'

function Goals(props) {

    return (
      
        <div>
            <img className="logo" src={Image} alt="Logo" />

        <div className="buttons">
            <div className="violet">
                Journal Entry
            </div>
            <div className="indigo">
                Meditation
            </div>
            <div className="blue">
                Reach Out to a Human
            </div>
            <div className="green">
                Do Something Kind for Someone
            </div>
            <div className="yellow">
                Sleep
            </div>
            <div className="orange">
                Movement
            </div>
            <div className="red">
                Budget
            </div>

        </div>
    )
}

export default Goals;