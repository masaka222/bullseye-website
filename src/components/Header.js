import React from 'react';

class App extends React.Component {
    render(){
        return (
            <div>
                <header className="header">
                    <div className = "header__logo-box">
                        <img src="img/logo.png" alt="Logo" class="header__logo"/>
                    </div>

                    <div class="header__text-box">
                        <h1 class="heading-primary">
                            <span class="heading-primary--main">Outdoors</span>
                            <span class="heading-primary--sub"> is where life happens</span>
                        </h1>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;