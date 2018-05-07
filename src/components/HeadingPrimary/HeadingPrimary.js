import React from 'react';

const HeadingPrimary = (props) => {
        return (
            <div className="header__text-box">
                <h1 className="primary-heading">{props.headerHeading}</h1>
            </div>
        );
}

export default HeadingPrimary;