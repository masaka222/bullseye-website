import React from 'react';
import bull1 from './logo1x.png';
import bull2 from './logo2x.png';
import Tilt from 'react-tilt';

const Logo = (props) => {
        return (
            <div>
                <Tilt className="Tilt " options={{ max : 55 }} >
                    <div className="Tilt-inner">
                        <img srcSet={bull1+ " 1x,"+ bull2 + " 2x"} alt="Logo" className={props.logoClass}
                             src={bull2}
                        />
                    </div>
                </Tilt>
            </div>
        );
}

export default Logo;