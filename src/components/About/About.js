import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Grid from '../Grid/Grid';

const About = (props) => {
        return (
            <div>
                <section className="section-about">
                    <HeadingSecondary aboutHeading = {props.aboutHeading}/>
                    <Grid/>
               </section>
            </div>
        );
}

export default About;