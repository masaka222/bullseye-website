import React from 'react';
import HeadingPrimary from '../HeadingPrimary/HeadingPrimary';
import Logo from '../Logo/Logo';
import NavigationPrimary from '../NavigationPrimary/NavigationPrimary';

const Header = (props) => {
    const logoClass = "header__logo";
        return (
            <div>
                <header className="header">
                <div className = "header__logo-box">
                    <Logo logoClass = {logoClass}/>
                </div>
                    <NavigationPrimary 
                        scroll = {props.scroll}
                    />
                    <HeadingPrimary 
                        headerHeading = {props.headerHeading}
                        headerSubHeading = {props.headerSubHeading}
                    />
                </header>
            </div>
        );
}
        

export default Header;