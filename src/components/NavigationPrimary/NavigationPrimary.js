import React from 'react';

const NavigationPrimary = (props) => { 
        return (
                <div className = "header__navigation-box">
                    <ul className = "navigation">
                        <li><a onClick={()=>{props.scroll.To('section-contact', 1000)}}>Contact</a></li>
                        <li><a onClick={()=>{props.scroll.To('section-reviews', 400)}}>Reviews</a></li>
                        <li><a onClick={()=>{props.scroll.To('section-menu', 250)}}>Menu</a></li>
                        <li><a onClick={()=>{props.scroll.To('section-about', 50)}}>About</a></li>
                    </ul>
                </div>
        );
}

export default NavigationPrimary;