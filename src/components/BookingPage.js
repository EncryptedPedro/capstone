import React, { useState, useReducer, useEffect } from 'react';
import "../Login.css";
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';
import { fetchAPI } from '../API.js';

function BookingPage() {
    const [formValues, setFormValues] = useState({
        name: '',
        date: new Date(),
        time: '',
        guests: '1',
        occasion: '',
    });

    const [submittedForms, setSubmittedForms] = useState([]);

    const handleFormSubmit = (values) => {
        setSubmittedForms([...submittedForms, values]);
    };

    const currentDate = new Date();
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(currentDate));

    function initializeTimes(date) {
        return (fetchAPI(date));
    };

    function updateTimes(date) {
        return (fetchAPI(date));
    };

    function reducer (state, action) {
        let newState = state;
        switch (action.type) {
            case 'update':
                const newDate = new Date(action.payload);
                newState = updateTimes(newDate)
                break;
        default:
            throw new Error()
        }
        return newState
    };

    return (
        <main>
            <div>
                <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
                formValues={formValues}
                setFormValues={setFormValues}
                onSubmit={handleFormSubmit} />
            </div>
            <div className="content">
                <h2>Reservations</h2>
                <div>
                    <hr />
                    {submittedForms.map((form, index) => (
                        <ReservedTables
                        key={index}
                        formValues={form} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default BookingPage;