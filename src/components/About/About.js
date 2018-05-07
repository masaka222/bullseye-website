import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';

const About = (props) => {
        return (
            <div>
                <section className="section-about">
                    <HeadingSecondary aboutHeading = {props.aboutHeading}/>
               </section>
            </div>
        );
}

export default About;