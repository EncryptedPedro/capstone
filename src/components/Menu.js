// loops over the specials that come from a data source and displays them in a card format
import React from 'react';
import Food from "../icons_assets/restaurant chef B.jpg";

function Menu() {
    return (
        <main>
            <div className="content">
                <h2>Menu</h2>
                <p>
                    Little Lemon is a family owned restaurant located in the heart of Chicago. We have been serving the community for over 20 years. Our mission is to provide our customers with the best dining experience
                </p>
            </div>
            <div className="image">
                <img src={Food} alt="Image" width="300px"></img>
            </div>
        </main>
    );
}

export default Menu;