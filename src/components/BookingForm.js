import React, { useState } from 'react';

function BookingForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const availableTimes = [
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '7:00 PM',
        '8:00 PM',
        '9:00 PM',
    ];

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
                            id="name"
                            name="name"
                            type="text"
                            onChange={(e) => {
                                setFormValues.name(e.target.value);
                              }}
                            value={formValues.name}
                        />
                    </div>
                    <br />
                    <div>
                        <label htmlFor="date">Date:</label>
                        <br />
                        <input
                            id="date"
                            name="date"
                            type="date"
                            onChange={(e) => {
                                setFormValues.name(e.target.value);
                              }}
                            value={formValues.name}
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
                                setFormValues.name(e.target.value);
                              }}
                            value={formValues.name}
                        >
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
                                setFormValues.name(e.target.value);
                              }}
                            value={formValues.name}
                        >
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
                                setFormValues.name(e.target.value);
                              }}
                            value={formValues.name}
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