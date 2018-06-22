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
                <a onClick={props.handleClearModalProperties} className="modal__close">&times;</a>
                <HeadingSecondary 
                    headingSecondary = {props.modalHeading}
                    headingMarginBottom = {'u-margin-bottom-small'}
                />
                <p className = "heading-tertiary u-center-text u-margin-bottom-medium" style={{color: "#BE2600"}}> {props.modalSubHeading} </p>
                {props.modalMenu}
            </div>
        </Modal>
    );
}

export default MenuModal;