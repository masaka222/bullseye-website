import React from 'react';
import MenuBox from '../MenuBox/MenuBox';

class MenuGrid extends React.Component {
    
    state = {
        selectedOption: undefined,
        modalImage1: undefined,
        modalImage2: undefined
    };

    render(){

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

        /* Variables for the Menu Modal */
        /* Burgers */
        const burgers = {
            title: "Burgers",
            subtitle: "All Double burgers 1/2lb of angus beef. Served on Brioche roll",
            icon: "icofont-burger",
            menu:  <div className="modal__text">
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

        const salads = {
            title: "Salads",
            subtitle: "Choice of Dressing: French, Russian, Oil & Vinegar, Rasberry Vinaigrette, Honey Mustard, Creamy Italian, Ranch, Lemon, Caesar, Bleau Cheese, Light Italian or Balsamic",
            icon: "icofont-fruits",
        };

        const sandwiches = {
            title: "Sandwiches",
            subtitle: "Served with French Fries, Ciabatta or Tandoori Flat Bread $8.95",
            icon: "icofont-sub-sandwich",
        };

        const hotDogs = {
            title: "Hot-Dogs",
            icon: "icofont-hot-dog",
        };

        const tacos = {
            title: "Tacos",
            subtitle: "Original Mexican City Style Tacos Served in Corn Soft Tortillas Garnished with Chopped Onions and Chopped Cilantro. Served with Jalapeños and your choice salsa: Mild, Hot or Chipotle salsa. (Order of 3)",
            icon: "icofont-taco",
        };

        const sideOrders = {
            title: "Side Orders",
            icon: "icofont-french-fries",
        };

        return (
            <div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox foodName = {burgers.title} icon = {burgers.icon}/>
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {salads.title} icon = {salads.icon}/>
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {sandwiches.title} icon = {sandwiches.icon}/>  
                    </div>
                </div>
                <div className="row row-3-items">
                    <div className="col-1-of-3">
                        <MenuBox foodName = {hotDogs.title} icon = {hotDogs.icon}/>  
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {tacos.title} icon = {tacos.icon}/>
                    </div>
                    <div className="col-1-of-3">
                        <MenuBox foodName = {sideOrders.title} icon = {sideOrders.icon}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenuGrid;