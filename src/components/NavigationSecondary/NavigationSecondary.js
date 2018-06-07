import React from 'react';

const Navigation = () => {
        return (
                <div className = "header__navigation-box">
                    <ul className = "navigation">
                        <li><a href = "#section-contact">Contact</a></li>
                        <li><a href = "#section-reviews">Reviews</a></li>
                        <li><a href = "#section-menu">Menu</a></li>
                        <li><a href = "#section-about">About</a></li>
                    </ul>
                </div>
        );
}

export default Navigation;             
                
                <div className="navigation__fullscreen">
                    <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
                    <label for="navi-toggle" className="navigation__button">MENU</label>
                    <div className="navigation__background">&nbsp;</div>

                    <nav className = "navigation__nav">
                        <ul className = "navigation__list">
                            <li className="navigation__item"><a href = "#section-contact" className="navigation__link">Contact</a></li>
                            <li className="navigation__item"><a href = "#section-reviews" className="navigation__link">Reviews</a></li>
                            <li className="navigation__item"><a href = "#section-menu" className="navigation__link">Menu</a></li>
                            <li className="navigation__item"><a href = "#section-about" className="navigation__link">About</a></li>
                        </ul>
                    </nav>
                </div>