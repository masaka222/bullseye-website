import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Review from '../Review/Review';
import Button from '../Button/Button';

const Reviews = (props) => {
    const headingId = "reviews"
        return (
            <div>
                <section className="section-reviews" id="section-reviews">
                    <HeadingSecondary 
                        headingSecondary = {props.reviewsHeading}
                        headingId = {headingId}
                        headingMarginBottom = {props.headingMarginBottom}
                    />
                    <div className="row">
                        <Review 
                            reviewHeading = {props.review1heading}
                            reviewText = {props.review1text}
                        />
                    </div>
                    <div className="row">
                        <Review 
                            reviewHeading = {props.review2heading}
                            reviewText = {props.review2text}
                        />
                    </div>
                    <Button reviewslink = {props.reviewslink}/>
                </section>
            </div>
        );
}

export default Reviews;