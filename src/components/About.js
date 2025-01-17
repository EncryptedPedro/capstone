// describes the little lemon chicago restaurant and gives a short backstory for it
import React from "react";
import RestaurantFood from "../icons_assets/Mario and Adrian A.jpg";

function About() {
    return (
        <main>
            <div className="content">
                <h2>About Us</h2>
                <p>
                    Little Lemon is a family owned restaurant located in the heart of Chicago. We have been serving the community for over 20 years. Our mission is to provide our customers with the best dining experience
                </p>
            </div>
            <div className="image">
                <img src={RestaurantFood} alt="Image" width="300px"></img>
            </div>
        </main>
    );
};

export default About;