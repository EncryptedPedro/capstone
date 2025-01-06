import React from "react";
import ReserveButton from "./ReserveButton";
import RestauranFood from "../icons_assets/restauranfood.jpg";

const Main = () => {
    return (
        <main>
            <div className="content">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>Little Lemon is a family-owned restaurant that has been serving the Chicago community for over 20 years. Our mission is to provide our customers with the best dining experience</p>
                < ReserveButton />
            </div>
            <div>
                <img src={RestauranFood} alt="Image" width="300px"></img>
            </div>
        </main>
    );
}

export default Main;