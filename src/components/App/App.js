import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import NavigationSecondary from '../NavigationSecondary/NavigationSecondary';
import MenuModal from '../MenuModal/MenuModal';

class App extends React.Component {

    state = {
        modalHeading: undefined,
        modalSubHeading: undefined,
        modalImage1: undefined,
        modalImage2: undefined,
        modalMenu: undefined,
        modalHeading2: undefined,
        checked: false
    };

    render(){

        /* Margin Bottom sizes for Secondary Heading*/
        const marginBottomSmall = "u-margin-bottom-small";
        const marginBottomBig = "u-margin-bottom-big";

        /* Headings */
        const headerHeading = "Bullseye";
        const headerSubHeading = "Burger House";
        const aboutHeading = "Our Story";
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
        

        /*Functions*/
        const setModalProperties = (item, subHeading, menu, item2, subHeading2, menu2, item3, menu3) => {
            this.setState(()=>({
                modalHeading: item,
                modalSubHeading: subHeading,
                modalMenu: menu,
                modalHeading2: item2,
                modalSubHeading2: subHeading2,
                modalMenu2: menu2,
                modalHeading3: item3,
                modalMenu3: menu3
            }));
        }

        const handleClearModalProperties = () => {
            this.setState(()=>({
                modalHeading: undefined,
                modalSubHeading: undefined,
                modalMenu: undefined,
                modalHeading2: undefined,
                modalSubHeading2: undefined,
                modalMenu2: undefined,
                modalHeading3: undefined,
                modalMenu3: undefined
            }));
        }

        const handleManageCheckBox = () => {
            this.setState(()=>({
                checked: !this.state.checked
            }));
        }
        /*Function for smooth Scrolling */
        var scroll = (function() {
            var elementPosition = function(a) {
                return function() {
                    return a.getBoundingClientRect().top;
                };
            };
        
            var scrolling = function( elementID, milisec ) {
                var el = document.getElementById( elementID ),
                    elPos = elementPosition( el ),
                    duration = milisec,
                    increment = Math.round( Math.abs( elPos() )/40 ),
                    time = Math.round( duration/increment ),
                    prev = 0,
                    E;

                function scroller() {
                    E = elPos();
        
                    if (E === prev) {
                        return;
                    } else {
                        prev = E;
                    }
        
                    increment = (E > -20 && E < 20) ? ((E > - 5 && E < 5) ? 1 : 5) : increment;
        
                    if (E > 1 || E < -1) {
        
                        if (E < 0) {
                            window.scrollBy( 0,-increment );
                        } else {
                            window.scrollBy( 0,increment );
                        }
        
                        setTimeout(scroller, time);
        
                    } else {
        
                        el.scrollTo( 0,0 );
        
                    }
                }
                scroller();
            };
        
            return {
                To: scrolling
            }
        })();

        return (
            <div>
                <NavigationSecondary
                    checked = {this.state.checked}
                    handleManageCheckBox = {handleManageCheckBox}
                    scroll = {scroll}
                />
                <Header 
                    headerHeading = {headerHeading}
                    headerSubHeading = {headerSubHeading}
                    scroll = {scroll}
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
                    modalMenu       =   {this.state.modalMenu}
                    modalHeading2   =   {this.state.modalHeading2}
                    modalSubHeading2 =  {this.state.modalSubHeading2}
                    modalMenu2      =   {this.state.modalMenu2}
                    modalHeading3   =   {this.state.modalHeading3} 
                    modalMenu3      =   {this.state.modalMenu3}
                    handleClearModalProperties = {handleClearModalProperties}
                />
            </div>
        );
    }
}

export default App;