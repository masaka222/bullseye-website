import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import AboutGrid from '../AboutGrid/AboutGrid';

const About = (props) => {
    const headingId = "about";
        return (
            <div>
                <section className="section-about" id="section-about">
                    <HeadingSecondary 
                        headingSecondary = {props.aboutHeading}
                        headingId = {headingId}
                        headingMarginBottom = {props.headingMarginBottom}
                    />
                    <AboutGrid/>
               </section>
            </div>
        );
}

export default About;