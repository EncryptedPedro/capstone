import React, { useState, useEffect } from 'react';
import "../Login.css";

function BookingForm({ availableTimes, dispatch, formValues, setFormValues, onSubmit }) {
    const [isFormValid, setIsFormValid] = useState(false);
    const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    useEffect(() => {
        const { name, date, time, guests, occasion } = formValues;
        setIsFormValid(name && date && time && guests && occasion);
    }, [formValues]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid) {
            onSubmit(formValues);
            clearForm();
        }
    };

    const clearForm = () => {
        setFormValues({
            name: '',
            date: '',
            time: '',
            guests: '1',
            occasion: '',
        });
    };

    return (
        <div className="content">
            <h2>Reserve Table</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br />
                    <input
                        required
                        id="name"
                        name="name"
                        type="text"
                        onChange={(e) => {
                            setFormValues({ ...formValues, name: e.target.value });
                        }}
                        value={formValues.name}
                        placeholder='John Doe'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="date">Date:</label>
                    <br />
                    <input
                        required
                        id="date"
                        name="date"
                        type="date"
                        onChange={(e) => {
                            setFormValues({ ...formValues, date: e.target.value });
                            dispatch({type: 'update', payload: e.target.value})
                        }}
                        value={formValues.date}
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="time">Time:</label>
                    <br />
                    <select
                        id="time"
                        name="time"
                        onChange={(e) => {
                            setFormValues({ ...formValues, time: e.target.value });
                        }}
                        value={formValues.time}
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="guests">Guests:</label>
                    <br />
                    <select
                        id="guests"
                        name="guests"
                        onChange={(e) => {
                            setFormValues({ ...formValues, guests: e.target.value });
                        }}
                        value={formValues.guests}
                    >
                        {slots.map((slot) => (
                            <option key={slot} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>
                <br />
                <div>
                    <label htmlFor="occasion">Occasion:</label>
                    <br />
                    <input
                        id="occasion"
                        name="occasion"
                        type="text"
                        onChange={(e) => {
                            setFormValues({ ...formValues, occasion: e.target.value });
                        }}
                        value={formValues.occasion}
                        placeholder='Birthday, Anniversary, etc.'
                    />
                </div>
                <br />
                <button type="submit" disabled={!isFormValid}>Reserve</button>
            </form>
        </div>
    );
}

export default BookingForm;