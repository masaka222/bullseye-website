import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';
import Map from '../Map/Map';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const ContactBox = (props) => {
        return (
            <div className = "contact-box row">
                <div className="col-1-of-2">
                    <Map
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className="col-1-of-2" style={{padding: '3rem 0 0 0'}}>
                    <HeadingSecondary headingSecondary = {props.contactHeading}/>
                    <p className = "contact-box__address">
                        We’d be delighted to hear from you or answer any questions 
                        you may have. To contact us, please send a message to 
                        <strong style = {{color: '#DD2C00'}}> bullseyeburgerhouse@gmail.com </strong> 
                        or contact our facebook page, and our management 
                        team will reply promptly.
                    </p>
                    
                </div>
            </div>
        );
}

export default ContactBox;