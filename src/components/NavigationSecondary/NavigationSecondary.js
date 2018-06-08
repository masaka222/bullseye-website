import React from 'react';

const NavigationSecondary = () => {
        return (
            <div className="navigation__fullscreen">
                <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
                <label for="navi-toggle" className="navigation__button">MENU</label>
                <div className="navigation__background">&nbsp;</div>

                <nav className = "navigation__nav">
                    <ul className = "navigation__list">
                        <li className="navigation__item"><a href = "#section-contact" className="navigation__link">About</a></li>
                        <li className="navigation__item"><a href = "#section-reviews" className="navigation__link">Menu</a></li>
                        <li className="navigation__item"><a href = "#section-menu" className="navigation__link">Reviews</a></li>
                        <li className="navigation__item"><a href = "#section-about" className="navigation__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
}

export default NavigationSecondary;             