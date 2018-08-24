import React from 'react';
import Modal from 'react-modal';
import HeadingSecondary from '../HeadingSecondary/HeadingSecondary';

const MenuModal = (props) => {
    return (
        <Modal
            isOpen={!!props.modalHeading}
            onRequestClose = {props.handleClearModalProperties}
            contentLabel = 'MenuPopUp'
            closeTimeoutMS = {300}
            className = "modal"
            overlayClassName = "modal__overlay"
        >
            <div className="modal__up">
                <a onClick={props.handleClearModalProperties} className="modal__close">
                    &times;
                </a>
                <HeadingSecondary 
                    headingSecondary = {props.modalHeading}
                    headingMarginBottom = {'u-margin-bottom-small'}
                />
                <p className = "heading-tertiary u-center-text u-margin-bottom-medium" style={{color: "#BE2600"}}> 
                    {props.modalSubHeading} 
                </p>

                {props.modalMenu}

                {/*If there is a second Heading passed */
                    props.modalHeading2 && 
                <div>
                    <div className = "u-margin-bottom-medium"/>
                    <HeadingSecondary 
                        headingSecondary = {props.modalHeading2}
                        headingMarginBottom = {'u-margin-bottom-small'}
                    />
                    <p className = "heading-tertiary u-center-text u-margin-bottom-medium" style={{color: "#BE2600"}}> {props.modalSubHeading2} </p>
                    {props.modalMenu2}
                </div>
                }                
                
                {/*If there is a third Heading passed */
                props.modalHeading3 &&
                <div>
                    <div className = "u-margin-bottom-medium"/>
                    <HeadingSecondary 
                        headingSecondary = {props.modalHeading3}
                        headingMarginBottom = {'u-margin-bottom-small'}
                    />
                    {props.modalMenu3}
                </div>
                }
            </div>
        </Modal>
    );
}

export default MenuModal;