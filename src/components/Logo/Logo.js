import React from 'react';
import bull from './logo.png';
import Tilt from 'react-tilt';

const Logo = (props) => {
        return (
            <div>
                <Tilt className="Tilt " options={{ max : 55 }} >
                    <div className="Tilt-inner">
                        <img src={bull} alt="Logo" class={props.logoClass}/>
                    </div>
                </Tilt>
            </div>
        );
}

export default Logo;