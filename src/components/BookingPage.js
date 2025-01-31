import React, { useState, useReducer } from 'react';
import "../Login.css";
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    function updateTimes(availableTimes) {
        return availableTimes;
    }

    function initializeTimes() {
        return ['12:00 PM', '1:00 PM', '2:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];
    }

    const [formValues, setFormValues] = useState({
        name: '',
        date: '',
        time: '',
        guests: '1',
        occasion: '',
    });

    const [submittedForms, setSubmittedForms] = useState([]);

    const handleFormSubmit = (values) => {
        setSubmittedForms([...submittedForms, values]);
    };

    return (
        <main>
            <div>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} formValues={formValues} setFormValues={setFormValues} onSubmit={handleFormSubmit} />
            </div>
            <div className="content">
                <h2>Reservations</h2>
                <div>
                    <hr />
                    {submittedForms.map((form, index) => (
                        <ReservedTables key={index} formValues={form} />
                    ))}
                </div>
            </div>
        </main>
    );
}

export default BookingPage;