import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Review from '../Review/Review';
import Button from '../Button/Button';
import Zoom from 'react-reveal/Zoom';

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
                    <Zoom>
                        <Review 
                            reviewHeading = {props.review1heading}
                            reviewText = {props.review1text}
                        />
                    </Zoom>
                    </div>
                    <div className="row">
                    <Zoom>
                        <Review 
                            reviewHeading = {props.review2heading}
                            reviewText = {props.review2text}
                        />
                    </Zoom>
                    </div>
                    <Button reviewslink = {props.reviewslink}/>
                </section>
            </div>
        );
}

export default Reviews;