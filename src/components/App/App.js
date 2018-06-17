import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NavigationSecondary from '../NavigationSecondary/NavigationSecondary';
import MenuModal from '../MenuModal/MenuModal';

/* Modal Images */
import Burger1 from './Photo1.jpg';
import Burger2 from './Photo3.jpg';

class App extends React.Component {

    state = {
        modalHeading: undefined,
        modalSubHeading: undefined,
        modalImage1: undefined,
        modalImage2: undefined,
        modalMenu: undefined
    };

    render(){

        /* Margin Bottom sizes for Secondary Heading*/
        const marginBottomSmall = "u-margin-bottom-small";
        const marginBottomMedium = "u-margin-bottom-medium";
        const marginBottomBig = "u-margin-bottom-big";

        /* Headings */
        const headerHeading = "Bullseye";
        const headerSubHeading = "Burger House";
        const aboutHeading = "About Us";
        const reviewsHeading = "What people think about us";
        const contactHeading = "Get in touch";

        /* Variables for Review #1 */
        const review1heading = "It's about time this area has a good burger place";
        const review1text = "But good is an understatement! Absolutely delicious! Fresh and piled high and the rolls... Perfect! You had me at steak fries! Wishing you much success in the neighborhood! An added bonus is the friendly service on the phone and the delivery driver is a super nice guy too!";
        const review1img = "";

        /* Variables for Review #2 */
        const review2heading = "The guacamole chicken sandwich is so good I haven't tried anything else yet!";
        const review2text = "Bullseye only opened a couple months ago and I've already eaten here 4 times! I keep ordering the guacamole chicken sandwich, it is so good I haven't tried anything else yet! & The fries have been perfect every time!";
        const review2img = "";

        const reviewslink = "https://www.facebook.com/pg/bullseyeburgerhouse/reviews/?ref=page_internal";
        
        const setModalProperties = (item, subHeading, menu) => {
            this.setState(()=>({
                modalHeading: item,
                modalSubHeading: subHeading,
                modalMenu: menu
            }));
        }

        const handleClearModalProperties = () => {
            this.setState(()=>({
                modalHeading: undefined,
                modalSubHeading: undefined,
                modalImage1: undefined,
                modalImage2: undefined,
                modalMenu: undefined
            }));
        }

        return (
            <div>
                <NavigationSecondary/>
                <Header 
                    headerHeading = {headerHeading}
                    headerSubHeading = {headerSubHeading}
                />
                <main>
                    <About 
                        aboutHeading = {aboutHeading}
                        headingMarginBottom = {marginBottomBig}
                    />
                    <Menu 
                        setModalProperties = {setModalProperties}
                    />
                    <Reviews 
                        reviewsHeading = {reviewsHeading}
                        headingMarginBottom = {marginBottomBig}

                        review1heading = {review1heading}
                        review1text = {review1text}

                        review2heading = {review2heading}
                        review2text = {review2text}

                        reviewslink = {reviewslink}
                    />
                    <Contact 
                        contactHeading = {contactHeading}
                        headingMarginBottom = {marginBottomSmall}
                    />
                </main>
                <Footer/>
                <MenuModal
                    modalHeading    =   {this.state.modalHeading}
                    modalSubHeading =   {this.state.modalSubHeading}
                    modalImage1     =   {this.state.modalImage1}
                    modalImage2     =   {this.state.modalImage2}
                    modalMenu       =   {this.state.modalMenu}
                    handleClearModalProperties = {handleClearModalProperties}
                />
            </div>
        );
    }
}

export default App;