import React from 'react';
import ReserveButton from "../foundations/ReserveButton";
import RestaurantFood from "../../icons_assets/restauranfood.jpg";

function Homepage() {
    return (
        <main>
            <div className="content">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a family-owned restaurant that has been serving the Chicago community for over 20 years. Our mission is to provide our customers with the best dining experience</p>
                <ReserveButton />
            </div>
            <div className="image">
                <img src={RestaurantFood} alt="Image" width="300px"></img>
            </div>
        </main>
    );
}

export default Homepage;