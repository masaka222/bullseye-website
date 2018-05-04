import React from 'react';

const Heading = (props) => {
        return (
            <div className="header__text-box">
                <h1 className="heading">{props.heading}</h1>
            </div>
        );
}

export default Heading;