import React from 'react';
import MenuGrid from '../MenuGrid/MenuGrid';

const Menu = (props) => {
        return (
            <div>
                <section className="section-menu" id="section-menu">
                    <MenuGrid 
                        setModalProperties = {props.setModalProperties}
                    />
                </section>
            </div>
        );
}

export default Menu;