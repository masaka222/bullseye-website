import React from 'react';
import Scrollchor from 'react-scrollchor';

const NavigationPrimary = (props) => { 
        return (
                <div className = "header__navigation-box">
                    <ul className = "navigation">
                        <li><Scrollchor to="section-contact">Contact</Scrollchor></li>
                        <li><Scrollchor to="section-reviews">Reviews</Scrollchor></li>
                        <li><Scrollchor to="section-menu">Menu</Scrollchor></li>
                        <li><Scrollchor to="section-about">About</Scrollchor></li>
                    </ul>
                </div>
        );
}

export default NavigationPrimary;