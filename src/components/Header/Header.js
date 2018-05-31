import React from 'react';
import HeadingPrimary from '../HeadingPrimary/HeadingPrimary';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

class Header extends React.Component {

    render(){
        const logoClass = "header__logo";
    
        return (
            <div>
                <header className="header">
                <div className = "header__logo-box">
                    <Logo logoClass = {logoClass}/>
                </div>
                    <Navigation />
                    <HeadingPrimary headerHeading = {this.props.headerHeading}/>
                </header>
            </div>
        );
    }
}
        

export default Header;