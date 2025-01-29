import React, { useState } from 'react';

function BookingForm({availableTimes, dispatch}) {
    const [formValues, setFormValues] = useState({
        name: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const slots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Table reserved!");
        // clearForm();
    };

    return (
        <main>
            <div className="content">
                <h2>Reservations</h2>
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
                                setFormValues(e.target.value);
                              }}
                            value={formValues.name}
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
                                setFormValues(e.target.value);
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
                                setFormValues(e.target.value);
                              }}
                            value={formValues.time}
                        >
                            {availableTimes.map((time, index) => {
                                return (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                );
                            })}
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
                                setFormValues(e.target.value);
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
                                setFormValues(e.target.value);
                              }}
                            value={formValues.occasion}
                        />
                    </div>
                    <br />
                    <button type="submit">Reserve</button>
                </form>
            </div>

        </main>
    );
}

export default BookingForm;