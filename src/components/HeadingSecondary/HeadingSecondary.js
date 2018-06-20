import React from 'react';

const HeadingSecondary = (props) => {
        return (
            <div className = {`u-center-text ${props.headingMarginBottom}`}>
            {/*The marginTop actually hides the paddingTop, and this hack is done in order the Navigation
            to stop some pixels before the actual heading*/}
                <h2 style = {{paddingTop: '13rem', marginTop:'-13rem'}} className="heading-secondary"><span id = {props.headingId}></span>{props.headingSecondary}</h2>
            </div>
        );
}

export default HeadingSecondary;