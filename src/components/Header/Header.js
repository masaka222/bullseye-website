import React from 'react';
import HeadingPrimary from '../HeadingPrimary/HeadingPrimary';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
        return (
            <div>
                <header className="header">
                    <Logo />
                    <Navigation />
                    <HeadingPrimary headerHeading = {props.headerHeading}/>
                </header>
            </div>
        );
}

export default Header;