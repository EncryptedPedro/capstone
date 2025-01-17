// order online component
import React from 'react';
import Dessert from "../icons_assets/lemon dessert.jpg";

function Order() {
    return (
        <main>
            <div className="content">
                <h2>Order</h2>
                <p>
                    Little Lemon is a family owned restaurant located in the heart of Chicago. We have been serving the community for over 20 years. Our mission is to provide our customers with the best dining experience
                </p>
            </div>
            <div className="image">
                <img src={Dessert} alt="Image" width="300px"></img>
            </div>
        </main>
    );
}

export default Order;