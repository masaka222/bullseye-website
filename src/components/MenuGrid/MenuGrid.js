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
                            icon = {burgers.icon}
                            setModalProperties = {props.setModalProperties}
                            title = {burgers.title} 
                            subtitle = {burgers.subtitle}
                            menu = {burgers.menu}
                            title2 = {burgers.title2}
                            subtitle2 = {burgers.subtitle2}
                            menu2 = {burgers.menu2}
                        />
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            icon = {salads.icon}
                            setModalProperties = {props.setModalProperties}
                            title = {salads.title} 
                            subtitle = {salads.subtitle}
                            menu = {salads.menu}
                        />
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            icon = {sandwiches.icon}
                            setModalProperties = {props.setModalProperties}
                            title = {sandwiches.title} 
                            subtitle = {sandwiches.subtitle}
                            menu = {sandwiches.menu}
                            title2 = {sandwiches.title2}
                            subtitle2 = {sandwiches.subtitle2}
                            menu2 = {sandwiches.menu2}
                            title3 = {sandwiches.title3}
                            menu3 = {sandwiches.menu3}
                        />  
                    </div>
                </div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox 
                            icon = {hotDogs.icon}
                            setModalProperties = {props.setModalProperties}
                            title = {hotDogs.title} 
                            subtitle = {hotDogs.subtitle}
                            menu = {hotDogs.menu}
                        />  
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            icon = {tacos.icon}
                            setModalProperties = {props.setModalProperties}
                            title = {tacos.title} 
                            subtitle = {tacos.subtitle}
                            menu = {tacos.menu}
                        />
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox 
                            icon = {sideOrders.icon}
                            setModalProperties = {props.setModalProperties}
                            title = {sideOrders.title} 
                            subtitle = {sideOrders.subtitle}
                            menu = {sideOrders.menu}
                        />
                    </div>
                </div> 
            </div>
        );
}

export default MenuGrid;