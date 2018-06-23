import React from 'react';

const HeadingSecondary = (props) => {
        return (
            <div style = {{paddingTop: '13rem', marginTop:'-13rem'}} className = {`u-center-text ${props.headingMarginBottom}`} id = {props.headingId}>
            {/*The marginTop actually hides the paddingTop, and this hack is done in order the Navigation
            to stop some pixels before the actual heading*/}
                <h2 className="heading-secondary">{props.headingSecondary}</h2>
            </div>
        );
}

export default HeadingSecondary;