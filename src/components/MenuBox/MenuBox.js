import React from 'react';

const MenuBox = (props) => {
        return (
            <div onClick={()=>{props.setModalProperties(props.title, props.subtitle , props.menu, props.title2, props.subtitle2, props.menu2, props.title3, props.menu3)}} className = "menu-box-link">
                <div className = "menu-box">
                    <i className = { `icofont menu-box__icon ${props.icon}`}></i>
                    <h3 className = "heading-tertiary"> {props.title}</h3>
                </div>
            </div>
        );
}

export default MenuBox;