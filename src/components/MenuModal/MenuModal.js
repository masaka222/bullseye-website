import React from 'react';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';

const MenuModal = (props) => {
    return (
        <div className="modal" id="modal">
            <div className="modal__content">
                <div className="modal__left">
                    <img src={props.modalImage1} alt={props.modalImage1} className="modal__img"/>
                    <img src={props.modalImage2} alt={props.modalImage2} className="modal__img"/>    
                </div>
                <div className="modal__right">
                    <a href="#section-menu" className="modal__close">&times;</a>
                    <HeadingSecondary 
                        headingSecondary = {props.modalHeading}
                        headingMarginBottom = {props.headingMarginBottom}
                    />
                    <p className = "heading-tertiary u-center-text u-margin-bottom-medium" style={{color: "#BE2600"}}> All Double burgers 1/2lb of angus beef. Served on Brioche roll </p>
                    <p className="modal__text">
                        <p className = "heading-tertiary">Hamburger $4.75</p>
                        <p className = "heading-tertiary">Cheeseburger $5.75</p>
                        <p className = "heading-tertiary">Cheeseburger Platter $8.25</p>
                            Served with Lettuce, Tomato, French Fries
                        <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                        <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                        <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                        <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                        <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                        <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                            <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                            <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                            <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                            Cheddar Cheese, Bacon, Fried Egg
                            
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MenuModal;
