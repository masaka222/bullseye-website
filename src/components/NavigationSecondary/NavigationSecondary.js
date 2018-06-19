import React from 'react';


const NavigationSecondary = (props) => {
    /* Function to both Scroll and Close the Navigation */
    const scrollAndManageCheckBox = (elementID, milisec) => {
        props.handleManageCheckBox();
        props.scroll.To(elementID, milisec);
    };

        return (
            <div className="navigation__fullscreen">
                <input type="checkbox" checked={props.checked} onChange={props.handleManageCheckBox} className="navigation__checkbox" id="navi-toggle"/>
                <label htmlFor="navi-toggle" className="navigation__button">
                    <span className="navigation__icon">&nbsp;</span>
                </label>
                <div className="navigation__background">&nbsp;</div>

                <nav className = "navigation__nav">
                    <ul className = "navigation__list">
                        <li className="navigation__item"><a onClick={()=>{scrollAndManageCheckBox('about', 200)}} className="navigation__link">About</a></li>
                        <li className="navigation__item"><a onClick={()=>{scrollAndManageCheckBox('section-menu', 200)}} className="navigation__link">Menu</a></li>
                        <li className="navigation__item"><a onClick={()=>{scrollAndManageCheckBox('reviews', 200)}} className="navigation__link">Reviews</a></li>
                        <li className="navigation__item"><a onClick={()=>{scrollAndManageCheckBox('section-contact', 200)}} className="navigation__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        );
}

export default NavigationSecondary;             