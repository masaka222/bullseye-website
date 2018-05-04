import React from 'react';
import bull from './logo.png';

const Logo = () => {
        return (
            <div className = "header__logo-box">
                <img src={bull} alt="Logo" class="header__logo"/>
            </div>
        );
}

export default Logo;