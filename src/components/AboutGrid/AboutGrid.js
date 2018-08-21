import React from 'react';
import Fade from 'react-reveal/Fade';
import Photo1 from './Photo1@0,5x.jpg';
import Photo2 from './Photo2@0,5x.jpg';
import Photo3 from './Photo3@0,5x.jpg';

const AboutGrid = () => {
        return (
            <div className="row">
                <div className="col-1-of-2">
                <Fade left>
                    <h3 className="heading-tertiary u-margin-bottom-medium">Our love for a good burger brought us to Glenside</h3>
                    <p className="paragraph">
                        Ever imagined of a homemade burger with pure ingredients, two delicious Angus patties,
                        amazing sauces, and all that on a fresh Brioche Bun, only one call away from home?
                        Bullseye Burger House is all that and more.  
                        Being in the food industry for over 30 years, we gathered all the knowledge and experience
                        we got and implemented it into our burger. Now it's time for Glenside to taste it!
                    </p>
                </Fade>
                </div>
                <div className="col-1-of-2">
                <Fade right>
                    <div className="composition">
                        <img src = {Photo1} alt="1" className = "composition composition__photo composition__photo--p1"/>
                        <img src = {Photo2} alt="2" className = "composition composition__photo composition__photo--p2"/>
                        <img src = {Photo3} alt="3" className = "composition composition__photo composition__photo--p3"/>
                    </div>
                </Fade>
                </div>
            </div>
        );
}

export default AboutGrid;