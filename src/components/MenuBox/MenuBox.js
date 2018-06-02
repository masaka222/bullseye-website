import React from 'react';

const MenuBox = (props) => {
        return (
            <a href="#modal" className = "menu-box-link">
                <div className = "menu-box">
                    <i className = { `icofont menu-box__icon ${props.icon}`}></i>
                    <h3 className = "heading-tertiary"> {props.foodName}</h3>
                </div>
            </a>
        );
}

export default MenuBox;