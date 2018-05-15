import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Review from '../Review/Review';

const Reviews = (props) => {
        return (
            <div>
                <section className="section-reviews">
                    <HeadingSecondary headingSecondary = {props.reviewsHeading}/>

                    <div className="row">
                        <Review 
                            reviewHeading = {props.review1heading}
                            reviewText = {props.review1text}
                        />
                    </div>

                </section>
            </div>
        );
}

export default Reviews;