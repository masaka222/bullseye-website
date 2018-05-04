import React from 'react';
import Header from '../Header/Header';

class App extends React.Component {
    render(){
        const heading = "Now Open";

        return (
            <div>
            <Header heading = {heading}/>
            </div>
        );
    }
}

export default App;