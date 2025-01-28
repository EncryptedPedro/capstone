import React, { useState } from 'react';

function ReservedTables() {
    return (
        <main>
            <div className="content">
                <h2>Reservations</h2>
                <div>
                    <h3>Table 1</h3>
                    <p>Reserved for: John Doe</p>
                    <p>Date: 2021-12-25</p>
                    <p>Time: 7:00 PM</p>
                    <p>Guests: 4</p>
                    <p>Occasion: Birthday</p>
                </div>
            </div>
        </main>
    );
}

export default ReservedTables;