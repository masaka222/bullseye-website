import React from 'react';
import Map from '../Map/Map';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const ContactBox = () => {
        return (
            <div className = "contact-box row">
                <div className="col-1-of-2">
                <Map
                    containerElement={<div style={{ height: `500px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                </div>
                <div className="col-1-of-2">
                
                </div>
            </div>
        );
}

export default ContactBox;