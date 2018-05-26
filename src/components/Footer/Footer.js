import React from 'react';
import Logo from '../Logo/Logo';

const Footer = (props) => {
        return (
            <div>
                <footer className = "footer">
                    <div className="footer__logo-box">
                        <Logo />
                    </div>
                    <div className="row">
                        <div className="col-1-of-2">

                        </div>
                        <div className="col-1-of-2">
                        
                        </div>
                    </div>
                </footer>
            </div>
        );
}

export default Footer;