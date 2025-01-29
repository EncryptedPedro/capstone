// table reservations page
import React, { useState, useReducer } from 'react';
import Restaurant from "../icons_assets/restaurant.jpg";
import "../Login.css";
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(useReducer, ['12:00 PM', '1:00 PM', '2:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']);

    return (
        <main>
            <div>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
            </div>
            <div>
                <ReservedTables />
            </div>
        </main>
    );
}

export default BookingPage;