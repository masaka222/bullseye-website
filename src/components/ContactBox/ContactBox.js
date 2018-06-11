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
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBUx0QmETQ4igl3eH4LgNMYZR5iFrobbjo&callback=initMap"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className="col-1-of-2" style={{padding: '3rem 0 0 0'}}>
                    <HeadingSecondary 
                        headingSecondary = {props.contactHeading}
                        headingMarginBottom = {props.headingMarginBottom}
                    />
                    <p className = "contact-box__paragraph">
                        We’d be delighted to hear from you or answer any questions 
                        you may have. To contact us, please send a message to 
                        <strong style = {{color: '#DD2C00'}}> bullseyeburgerhouse@gmail.com </strong> 
                        or contact our facebook page, and our management 
                        team will reply promptly.
                    </p>
                    <br/>
                    <br/>
                    <p className="contact-box__address">
                        <p>282 North Keswick Avenue, </p>
                        <p>Glenside, Pennsylvania</p>
                        <p>215-884-8888</p>
                        <p>215-884-8890</p>
                    </p>
                    <br/>
                    <br/>     
                </div>
            </div>
        );
}

export default ContactBox;