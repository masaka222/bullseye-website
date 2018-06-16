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
        selectedOption: undefined,
        modalImage1: undefined,
        modalImage2: undefined
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

        /* Variables for the Menu Modal */
        /* Burgers */
        const burgers = {
            modalHeading: "Burgers",
            modalSubHeading: "All Double burgers 1/2lb of angus beef. Served on Brioche roll",
            modalMenu:  <div className="modal__text">
                            <p className = "heading-tertiary">Hamburger $4.75</p>
                            <p className = "heading-tertiary">Cheeseburger $5.75</p>
                            <p className = "heading-tertiary">Cheeseburger Platter $8.25</p>
                                Served with Lettuce, Tomato, French Fries
                            <p className = "heading-tertiary">Breakfast Burger $8.95</p>
                                Cheddar Cheese, Bacon, Fried Egg
                            <p className = "heading-tertiary">Blue Cheese Burger $8.95</p>
                                Lettuce, Tomato, Crumbled Blue Cheese, Cheddar Cheese & Crispy Onions
                            <p className = "heading-tertiary">BBQ Burger $8.95</p>
                                BBQ Sauce, Crispy Onions, Cheddar Cheese, Lettuce, Tomato & Mayonnaise
                            <p className = "heading-tertiary">Cuban Burger $8.95</p>
                                Ham, Swiss Cheese, Pickles, Mustard & Mayonnaise
                            <p className = "heading-tertiary">House Classic Burger $8.95</p>
                                American Cheese, Lettuce, Tomato & Red Onions 
                            <p className = "heading-tertiary">Jalapeño Burger $8.95</p>
                                Chipotle Ranch, Jalapeño, Lettuce, Tomato & Red Onions
                            <p className = "heading-tertiary">Guacamole Burger $8.95</p>
                                Cheddar Cheese, Lettuce, Tomato, Red Onions, Chipotle Ranch
                            <p className = "heading-tertiary">Mighty Greek Burger $8.95</p>
                                Feta Cheese, Lettuce, Tomato & Red Raw Onions
                            <p className = "heading-tertiary">Buffalo Burger $8.95</p>
                                1/4 Pound Burger Topped with Crispy Chicken Tenders, Tossed in Our Buffalo Wing Sauce, Blue Cheese & Crispy Onions on a Burger Bun
                            <p className = "heading-tertiary">The South Philly Burger $8.95</p>
                                2 patties of 1/4 Pound Burger Topped with Roasted Peppers, Fried Onions, Mushrooms & Melted Cheddar on a Brioche Bun
                            <p className = "heading-tertiary">Naked Angus $8.95</p>
                                No Bread, Lettuce, Tomato, Red Onions, Pickles, Mayo, Ketchup, Mustard & Cheddar Cheese
                            <p className = "heading-tertiary">Philadelphia Burger $8.95</p>
                                Philadelphia Cream Cheese, Bacon, Lettuce & Tomato
                            <p className = "heading-tertiary">The Melt $8.95</p>
                                Bacon, Fried Onions, Pickles, Mustard & Cheese Whiz on a Rye Bread
                            <p className = "heading-tertiary">Cheddar Bacon $8.95</p>
                                With Bacon, Lettuce, Melted Cheddar Cheese And Smoked Mayo Sauce
                            <p className = "heading-tertiary">Texas BBQ $8.95</p>
                                With Bacon, Melted Cheddar Cheese, Tomato, Lettuce And BBQ Sauce
                            <p className = "heading-tertiary">Mexican $8.95</p>
                                With Bacon, Lettuce, Mayo Yogurt Sauce, Nachos, Melted Cheddar Cheese And Caramelized Onions With Jalapeño And Pineapple
                            <p className = "heading-tertiary">Chili $8.95</p>
                                With Cheeese, Tomato, Lettuce, Pickles, Spicy Chili Sauce And Mayonnaise
                            <p className = "heading-tertiary">Special Burger $8.95</p>
                                2 Patties of 100% Angus Beef on Ciabatta Bread with Melted Swiss Cheese, Tomatoes, Mayo, How Peppers & Pineapple 
                        </div>
        };
        
        const setModalProperties = (item, subHeading, image1, image2, menu) => {
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
                    <Menu />
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
                <button onClick={()=>{setModalProperties(burgers.modalHeading, burgers.modalSubHeading , Burger1, Burger2, burgers.modalMenu)}}>Burger</button>
                <button onClick={()=>{setModalProperties('salads')}}>Salads</button>
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