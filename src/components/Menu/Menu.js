import React from 'react';
import MenuGrid from '../MenuGrid/MenuGrid';
import Waypoint from 'react-waypoint';
import anime from 'animejs';

class Menu extends React.Component {

    state = {
        isInView: false
    };

    render(){

        const animateCardIn = ({previousPosition}) => {
            /* This if statement runs the animation only if you scroll from up to down to the
            position of the Waypoint, and only the first time you do it (isInView is false
            in the beginning and after that it's state is true)*/
            if (previousPosition === Waypoint.below && this.state.isInView === false) {
            
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

                this.setState(()=>({
                    isInView: true
                }));
            }

            
        }
            return (
                <div>
                    <section className="section-menu" id="section-menu">
                        <Waypoint
                            onEnter={animateCardIn}
                        />
                        <MenuGrid 
                            setModalProperties = {this.props.setModalProperties}
                        />
                    </section>
                </div>
            );
    }
}

export default Menu;