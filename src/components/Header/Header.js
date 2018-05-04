import React from 'react';
import Heading from '../Heading/Heading';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
        return (
            <div>
                <header className="header">
                    <Logo />
                    <Navigation />
                    <Heading heading = {props.heading}/>
                </header>
            </div>
        );
}

export default Header;