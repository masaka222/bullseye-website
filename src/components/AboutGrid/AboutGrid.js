import React from 'react';
import Photo1 from './Photo1.jpg';
import Photo2 from './Photo2.JPG';
import Photo3 from './Photo3.jpg';

const AboutGrid = () => {
        return (
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-medium">Our love for a good burger brought us in Glenside</h3>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sodales, 
                        conubia lectus rhoncus erat lacus elementum nulla, bibendum facilisis 
                        viverra per ut velit diam. Eros mattis sodales eget justo lobortis urna 
                        scelerisque ultrices per vivamus, laoreet blandit viverra integer lectus 
                        non risus magnis enim, magna egestas facilisis fusce id hendrerit eleifend dapibus faucibus. 
                        Nascetur mattis eros mus vulputate id hendrerit suscipit magnis, euismod orci litora platea 
                        ut sollicitudin.
                    </p>
                </div>
                <div className="col-1-of-2">
                    <div className="composition">
                        <img src = {Photo1} alt="1" className = "composition composition__photo composition__photo--p1"/>
                        <img src = {Photo2} alt="2" className = "composition composition__photo composition__photo--p2"/>
                        <img src = {Photo3} alt="3" className = "composition composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
        );
}

export default AboutGrid;