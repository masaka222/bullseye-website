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

        return (
            <div>
                <Header headerHeading = {headerHeading}/>
                <main>
                    <About aboutHeading = {aboutHeading}/>
                    <Menu />
                    <Reviews reviewsHeading = {reviewsHeading}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;