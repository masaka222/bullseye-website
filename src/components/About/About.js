import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Grid from '../Grid/Grid';

const About = (props) => {
        return (
            <div>
                <section className="section-about" id="section-about">
                    <HeadingSecondary 
                        headingSecondary = {props.aboutHeading}
                        headingMarginBottom = {props.headingMarginBottom}
                    />
                    <Grid/>
               </section>
            </div>
        );
}

export default About;