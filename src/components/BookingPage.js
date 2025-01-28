// table reservations page
import React from 'react';
import Restaurant from "../icons_assets/restaurant.jpg";
import "../Login.css";
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';

function BookingPage() {
    return (
        <main>
            <div>
                <BookingForm />
            </div>
            <div>
                <ReservedTables />
            </div>
        </main>
    );
}

export default BookingPage;