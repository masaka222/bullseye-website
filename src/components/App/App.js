import React from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Footer from '../Footer/Footer';

class App extends React.Component {
    render(){
        const headerHeading = "Now Open";
        const aboutHeading = "About Us";

        return (
            <div>
                <Header headerHeading = {headerHeading}/>
                <main>
                    <About aboutHeading = {aboutHeading}/>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default App;