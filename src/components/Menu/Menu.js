import React from 'react';
import MenuGrid from '../MenuGrid/MenuGrid';
import Waypoint from 'react-waypoint';
import anime from 'animejs';

const Menu = (props) => {
    const animateCardIn = () => {
        anime({
            targets: 'div.menu-box',
            opacity: [
                {
                    value: [0, 1],
                    easing: "linear",
                    duration: 300
                }
            ],
            translateY: [
                {value: [-40, 0], duration: 100}
            ],
            delay: function(target, index){
                return index * 100;
            }
        })
    }
        return (
            <div>
                <section className="section-menu" id="section-menu">
                <Waypoint
                        onEnter={animateCardIn}
                    />
                        <MenuGrid 
                            setModalProperties = {props.setModalProperties}
                        />
                </section>
            </div>
        );
}

export default Menu;