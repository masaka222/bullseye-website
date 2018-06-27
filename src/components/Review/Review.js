import React from 'react';

const Review = (props) => {
        return (
            <div className="review">
                <figure className="review__shape">
                    <img src={props.reviewImage} alt="" className="review__img"/>
                    <figcaption className="review__caption">
                        {props.reviewName}
                    </figcaption>
                </figure>
                <div className="review__text">
                    <h3 className="heading-tertiary u-margin-bottom-medium">{props.reviewHeading}</h3>
                    <p>{props.reviewText}</p>
                </div>
            </div>
                    
                
        );
}

export default Review;