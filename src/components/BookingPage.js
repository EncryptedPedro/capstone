// table reservations page
import React from 'react';
import Restaurant from "../icons_assets/restaurant.jpg";
import "../Login.css";
import BookingForm from './BookingForm';

function BookingPage() {
    return (
        <main>
            <div className="content">
                <BookingForm />
            </div>
        </main>
    );
}

export default BookingPage;