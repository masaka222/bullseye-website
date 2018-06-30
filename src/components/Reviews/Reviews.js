import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Review from '../Review/Review';
import Button from '../Button/Button';
import Zoom from 'react-reveal/Zoom';
import reviewImage1 from './reviewImage1.jpg';
import reviewImage2 from './reviewImage2.jpg';

const Reviews = (props) => {
        return (
            <div>
                <section className="section-reviews" id="section-reviews">
                    <HeadingSecondary 
                        headingSecondary = {props.reviewsHeading}
                        headingMarginBottom = {props.headingMarginBottom}
                    />
                    <div className="row">
                    <Zoom>
                        <Review 
                            reviewHeading = {props.review1heading}
                            reviewText = {props.review1text}
                            reviewImage = {reviewImage1}
                            reviewName = "Michelle Klawiter"
                        />
                    </Zoom>
                    </div>
                    <div className="row">
                    <Zoom>
                        <Review 
                            reviewHeading = {props.review2heading}
                            reviewText = {props.review2text}
                            reviewImage = {reviewImage2}
                            reviewName = "Clare Barbone"
                        />
                    </Zoom>
                    </div>
                    <Button reviewslink = {props.reviewslink}/>
                </section>
            </div>
        );
}

export default Reviews;