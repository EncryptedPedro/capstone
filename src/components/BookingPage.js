import React, { useState, useReducer, useEffect } from 'react';
import "../Login.css";
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';

function BookingPage() {
    const updateTimes = (state, action) => {
        switch (action.type) {
            case 'update':
                return action.payload;
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const [formValues, setFormValues] = useState({
        name: '',
        date: '',
        time: '',
        guests: '1',
        occasion: '',
    });

    const [submittedForms, setSubmittedForms] = useState([]);

    const fetchData = () => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((dataJSON) => {
            dispatch({ type: 'update', payload: dataJSON.availableTimes });
    })};

    const handleFormSubmit = (values) => {
        setSubmittedForms([...submittedForms, values]);
    };

    function initializeTimes() {
        return [
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "7:00 PM",
            "8:00 PM",
            "9:00 PM"
        ];
    };

    useEffect(() => {
        fetchData();
    }, []);

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