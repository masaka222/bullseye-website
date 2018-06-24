import React from 'react';
import MenuBox from '../MenuBox/MenuBox';
import {
    burgers, 
    salads, 
    sandwiches, 
    hotDogs, 
    tacos, 
    sideOrders
} from '../../MenuVars';

const MenuGrid = (props) => {
        return (
            <div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox   
                            setModalProperties = {props.setModalProperties}
                            title = {burgers.title} 
                            subtitle = {burgers.subtitle}
                            icon = {burgers.icon}
                            menu = {burgers.menu}
                        />
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            setModalProperties = {props.setModalProperties}
                            title = {salads.title} 
                            subtitle = {salads.subtitle}
                            icon = {salads.icon}
                            menu = {salads.menu}
                        />
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            setModalProperties = {props.setModalProperties}
                            title = {sandwiches.title} 
                            subtitle = {sandwiches.subtitle}
                            icon = {sandwiches.icon}
                            menu = {sandwiches.menu}
                        />  
                    </div>
                </div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox 
                            setModalProperties = {props.setModalProperties}
                            title = {hotDogs.title} 
                            subtitle = {hotDogs.subtitle}
                            icon = {hotDogs.icon}
                            menu = {hotDogs.menu}
                        />  
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            setModalProperties = {props.setModalProperties}
                            title = {tacos.title} 
                            subtitle = {tacos.subtitle}
                            icon = {tacos.icon}
                            menu = {tacos.menu}
                        />
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            setModalProperties = {props.setModalProperties}
                            title = {sideOrders.title} 
                            subtitle = {sideOrders.subtitle}
                            icon = {sideOrders.icon}
                            menu = {sideOrders.menu}
                        />
                    </div>
                </div> 
            </div>
        );
}

export default MenuGrid;