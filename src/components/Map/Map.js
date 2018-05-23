import React from 'react';
import {
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";

const Map = (props) => {
    return (
            <GoogleMap
                defaultZoom={17}
                defaultCenter={{ lat: 40.105827, lng: -75.146948 }}
            >
            <Marker
                position={{ lat: 40.1059919, lng: -75.14726150000001 }}
            />
            </GoogleMap>    
  );
}

export default withGoogleMap(Map);