import React from 'react';
import bull from './logo.png';
import Tilt from 'react-tilt';

const Logo = () => {
        return (
            <div>
                <Tilt className="Tilt " options={{ max : 55 }} >
                    <div className="Tilt-inner">
                        <img src={bull} alt="Logo" class="header__logo"/>
                    </div>
                </Tilt>
            </div>
        );
}

export default Logo;