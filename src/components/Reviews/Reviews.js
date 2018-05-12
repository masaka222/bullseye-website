import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';

const Reviews = (props) => {
        return (
            <div>
                <section className="section-reviews">
                    <HeadingSecondary headingSecondary = {props.reviewsHeading}/>
                </section>
            </div>
        );
}

export default Reviews;