import React from 'react';

const MenuBox = (props) => {
        return (
            <div onClick={()=>{props.setModalProperties(props.title, props.subtitle , props.menu)}} className = "menu-box-link">
                <div className = "menu-box">
                    <i className = { `icofont menu-box__icon ${props.icon}`}></i>
                    <h3 className = "heading-tertiary"> {props.title}</h3>
                </div>
            </div>
        );
}

export default MenuBox;