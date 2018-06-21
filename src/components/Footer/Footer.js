import React from 'react';
import Logo from '../Logo/Logo';

class Footer extends React.Component {

        render(){
            const logoClass = "footer__logo";

            return (
                <div>
                    <footer className = "footer">
                        <div className="footer__logo-box">
                            <Logo logoClass = {logoClass}/>
                        </div>
                        <div className="row">
                            <div className="col-1-of-2">
                                <div className="footer__navigation">
                                    <ul className="footer__list">
                                        <li className="footer__item"><a target="_blank" href="https://www.facebook.com/bullseyeburgerhouse/" className="footer__link">facebook</a></li>
                                        <li className="footer__item"><a target="_blank" href="https://www.instagram.com/bullseyeburgerhouse/?hl=en" className="footer__link">instagram</a></li>
                                        <li className="footer__item"><a target="_blank" href="https://www.yelp.com/biz/bullseye-burger-house-glenside-2" className="footer__link">yelp</a></li>
                                        <li className="footer__item"><a target="_blank" href="https://www.google.com/maps/place/Bullseye+Burger+House/@40.1059919,-75.1472615,15z/data=!4m5!3m4!1s0x0:0x56fb32fa33ec8993!8m2!3d40.1059919!4d-75.1472615" className="footer__link">google</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1-of-2">
                                <div className="footer__copyright">
                                    <p>282 North Keswick Avenue, </p>
                                    <p>Glenside, Pennsylvania</p>
                                    <p>215-884-8888</p>
                                    <p>215-884-8890</p>
                                    <br/>
                                    <p>Copyright &copy; by <a target="_blank" href="https://www.linkedin.com/in/vasilis-georgoudis-69211971/" className="footer__link">Vasilios Georgoudis</a>.</p>
                                    <p> Design by JONAS SCHMEDTMANN</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
        
}

export default Footer;