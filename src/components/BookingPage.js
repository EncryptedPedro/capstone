import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';
import ReservedTables from './ReservedTables';
import { BookingContext } from './BookingContext';
import { submitAPI } from '../API.js';

function BookingPage() {
    const {
        formValues,
        setFormValues,
        submittedForms,
        setSubmittedForms,
        availableTimes,
        dispatch,
    } = useContext(BookingContext);

    const navigate = useNavigate();

    const handleFormSubmit = async (values) => {
        const result = await submitAPI(values);
        if (result) {
            setSubmittedForms([...submittedForms, values]);
            navigate('/confirmation');
        } else {
            console.error('Failed to submit the form');
        }
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