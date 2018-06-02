import React from 'react';

const HeadingSecondary = (props) => {
        return (
            <div className = {`u-center-text ${props.headingMarginBottom}`}>
                <h2 className="heading-secondary">{props.headingSecondary}</h2>
            </div>
        );
}

export default HeadingSecondary;