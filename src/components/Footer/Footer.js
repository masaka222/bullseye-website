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
                                        <li className="footer__item"><a href="#" className="footer__link">facebook</a></li>
                                        <li className="footer__item"><a href="#" className="footer__link">instagram</a></li>
                                        <li className="footer__item"><a href="#" className="footer__link">yelp</a></li>
                                        <li className="footer__item"><a href="#" className="footer__link">google</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-1-of-2">
                                <p className="footer__copyright">
                                    <p>282 North Keswick Avenue, </p>
                                    <p>Glenside, Pennsylvania</p>
                                    <p>215-884-8888</p>
                                    <p>215-884-8890</p>
                                    <br/>
                                    <p>Copyright &copy; by <a href="https://github.com/masaka222" className="footer__link">Vasilios Georgoudis</a>.</p>
                                    <p> Design by Jonas Schmedtmann</p>
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        }
        
}

export default Footer;