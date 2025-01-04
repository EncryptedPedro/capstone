import React from "react";
import ReserveButton from "./ReserveButton";

const Main = () => {
    return (
        <main>
            <div className="content">
                <h2>Little Lemon</h2>
                <p>Chicago</p>
                <p>Little Lemon is a family-owned restaurant that has been serving the Chicago community for over 20 years. Our mission is to provide our customers with the best dining experience</p>
            </div>
            < ReserveButton />
        </main>
    );
}

export default Main;