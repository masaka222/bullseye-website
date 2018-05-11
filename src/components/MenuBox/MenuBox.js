import React from 'react';

const MenuBox = (props) => {
        return (
            <div className = "menu-box">
                <i className = { `icofont menu-box__icon ${props.icon}`}></i>
                <h3 className = "heading-tertiary"> {props.foodName}</h3>
            </div>
        );
}

export default MenuBox;