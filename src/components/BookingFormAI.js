import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function BookingForm() {
    const [formValues, setFormValues] = useState({
        name: '',
        date: '',
        time: '',
        guests: '',
        occasion: '',
    });

    const [reservedTimes, setReservedTimes] = useState({});

    const availableTimes = [
        '12:00 PM',
        '1:00 PM',
        '2:00 PM',
        '7:00 PM',
        '8:00 PM',
        '9:00 PM',
    ];

    const formik = useFormik({
        initialValues: formValues,
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required'),
            date: Yup.date()
                .required('Required')
                .min(new Date(), 'Date must be later than today'),
            time: Yup.string()
                .required('Required'),
            guests: Yup.number()
                .required('Required')
                .min(1, 'Must be at least 1')
                .max(10, 'Must be at most 10'),
            occasion: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            setFormValues(values);
            console.log('Form Values:', values);
            setReservedTimes(prevReservedTimes => ({
                ...prevReservedTimes,
                [values.date]: {
                    ...prevReservedTimes[values.date],
                    [values.time]: true,
                },
            }));
        },
    });

    const timesForSelectedDate = availableTimes.map(time => ({
        time,
        reserved: reservedTimes[formik.values.date]?.[time] || false,
    }));

    return (
        <main>
            <div className="content">
                <h2>Reservations</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div className="error">{formik.errors.name}</div>
                        ) : null}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="date">Date:</label>
                        <br />
                        <input
                            id="date"
                            name="date"
                            type="date"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.date}
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <div className="error">{formik.errors.date}</div>
                        ) : null}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="time">Time:</label>
                        <br />
                        <select
                            id="time"
                            name="time"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.time}
                        >
                            <option value="" label="Select time" />
                            {timesForSelectedDate.map((timeSlot, index) => (
                                <option key={index} value={timeSlot.time} disabled={timeSlot.reserved}>
                                    {timeSlot.time} {timeSlot.reserved ? '(Reserved)' : ''}
                                </option>
                            ))}
                        </select>
                        {formik.touched.time && formik.errors.time ? (
                            <div className="error">{formik.errors.time}</div>
                        ) : null}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="guests">Guests:</label>
                        <br />
                        <select
                            id="guests"
                            name="guests"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.guests}
                        >
                            <option value="" label="Select number of guests" />
                            {[...Array(10).keys()].map((num) => (
                                <option key={num + 1} value={num + 1}>
                                    {num + 1}
                                </option>
                            ))}
                        </select>
                        {formik.touched.guests && formik.errors.guests ? (
                            <div className="error">{formik.errors.guests}</div>
                        ) : null}
                    </div>
                    <br />
                    <div>
                        <label htmlFor="occasion">Occasion:</label>
                        <br />
                        <input
                            id="occasion"
                            name="occasion"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.occasion}
                        />
                        {formik.touched.occasion && formik.errors.occasion ? (
                            <div className="error">{formik.errors.occasion}</div>
                        ) : null}
                    </div>
                    <br />
                    <button type="submit">Reserve</button>
                </form>
            </div>
        </main>
    );
}

export default BookingForm;