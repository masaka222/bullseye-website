import React from 'react';

const Button = (props) => {
        return (
            <div className = "u-center-text u-margin-top-huge">
                <a href = {props.reviewslink}  className = "btn-text">See all of our Reviews on Facebook &rarr;</a>
            </div>
        );
}

export default Button;