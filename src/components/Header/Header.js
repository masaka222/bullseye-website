import React from 'react';
import HeadingPrimary from '../HeadingPrimary/HeadingPrimary';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

const Header = (props) => {
        return (
            <div>
                <header className="header">
                <div className = "header__logo-box">
                    <Logo />
                </div>
                    <Navigation />
                    <HeadingPrimary headerHeading = {props.headerHeading}/>
                </header>
            </div>
        );
}

export default Header;