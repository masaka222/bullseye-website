import React from 'react';

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
                        <li className="navigation__item"><a href = "#section-about" onClick={props.handleManageCheckBox} className="navigation__link">About</a></li>
                        <li className="navigation__item"><a href = "#section-menu" onClick={props.handleManageCheckBox} className="navigation__link">Menu</a></li>
                        <li className="navigation__item"><a href = "#section-reviews" onClick={props.handleManageCheckBox} className="navigation__link">Reviews</a></li>
                        <li className="navigation__item"><a href = "#section-contact" onClick={props.handleManageCheckBox} className="navigation__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
}

export default NavigationSecondary;             