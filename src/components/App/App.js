import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';
import Footer from '../Footer/Footer';

class App extends React.Component {
    render(){
        const headerHeading = "Now Open";
        const aboutHeading = "About Us";
        const reviewsHeading = "What people think about us";

        /* Variables for Review #1 */
        const review1heading = "It's about time this area has a good burger place";
        const review1text = "But good is an understatement! Absolutely delicious! Fresh and piled high and the rolls... Perfect! You had me at steak fries! Wishing you much success in the neighborhood! An added bonus is the friendly service on the phone and the delivery driver is a super nice guy too!";
        const review1img = "";

        return (
            <div>
                <Header headerHeading = {headerHeading}/>
                <main>
                    <About aboutHeading = {aboutHeading}/>
                    <Menu />
                    <Reviews 
                        reviewsHeading = {reviewsHeading}
                        review1heading = {review1heading}
                        review1text = {review1text}
                    />
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;