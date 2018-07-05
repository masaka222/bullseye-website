import React from 'react';
import Scrollchor from 'react-scrollchor';

const NavigationSecondary = (props) => {
        return (
            <div className="navigation__fullscreen">
                <input type="checkbox" checked={props.checked} onChange={props.handleManageCheckBox} className="navigation__checkbox" id="navi-toggle"/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>

                <nav className = "navigation__nav">
                    <ul className = "navigation__list">
                        <li className="navigation__item" onClick={()=>{props.handleManageCheckBox()}}><Scrollchor to="section-about" className="navigation__link">About</Scrollchor></li>
                        <li className="navigation__item" onClick={()=>{props.handleManageCheckBox()}}><Scrollchor to="section-menu" className="navigation__link">Menu</Scrollchor></li>
                        <li className="navigation__item" onClick={()=>{props.handleManageCheckBox()}}><Scrollchor to="section-reviews" className="navigation__link">Reviews</Scrollchor></li>
                        <li className="navigation__item" onClick={()=>{props.handleManageCheckBox()}}><Scrollchor to="section-contact" className="navigation__link">Contact</Scrollchor></li>
                        </ul>
                </nav>
            </div>
        );
}

export default NavigationSecondary;             