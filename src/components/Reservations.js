// table reservations page
import React from 'react';
import Restaurant from "../icons_assets/restaurant.jpg";

function Reservations() {
    return (
        <main>
            <div className="content">
                <h2>Reservations</h2>
                <p>
                    Little Lemon is a family owned restaurant located in the heart of Chicago. We have been serving the community for over 20 years. Our mission is to provide our customers with the best dining experience
                </p>
            </div>
            <div className="image">
                <img src={Restaurant} alt="Image" width="300px"></img>
            </div>
        </main>
    );
}

export default Reservations;