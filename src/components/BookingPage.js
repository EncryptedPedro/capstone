import React, { useState, useReducer, useEffect } from 'react';
import "../Login.css";
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';

function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const [formValues, setFormValues] = useState({
        name: '',
        date: '',
        time: '',
        guests: '1',
        occasion: '',
    });

    const [data, setData] = useState({});
    const [submittedForms, setSubmittedForms] = useState([]);

    const fetchData = (x) => {
        fetch("../data.json")
        .then((response) => response.json())
        .then((dataJSON) => (
            setData(dataJSON),
            dispatch(dataJSON.availableTimes)))
    };

    const handleFormSubmit = (values) => {
        setSubmittedForms([...submittedForms, values]);
    };

    function updateTimes(data) {
        return data; // just for example, will be configured later
    };

    function initializeTimes(data) {
        return data;
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