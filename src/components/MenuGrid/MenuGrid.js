import React from 'react';
import MenuBox from '../MenuBox/MenuBox';

class MenuGrid extends React.Component {
    
    render(){
        const food1 = "Burgers";
        const food2 = "Salads";
        const food3 = "Sandwiches";
        const food4 = "hot-dogs";
        const food5 = "Tacos";
        const food6 = "Side Orders";

        const icon1 = "icofont-burger";
        const icon2 = "icofont-fruits";
        const icon3 = "icofont-sub-sandwich";
        const icon4 = "icofont-hot-dog";
        const icon5 = "icofont-taco";
        const icon6 = "icofont-french-fries";

        return (
            <div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox foodName = {food1} icon = {icon1}/>
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {food2} icon = {icon2}/>
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {food3} icon = {icon3}/>  
                    </div>
                </div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox foodName = {food4} icon = {icon4}/>  
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {food5} icon = {icon5}/>
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {food6} icon = {icon6}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuGrid;