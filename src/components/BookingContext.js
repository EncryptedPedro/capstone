import React, { createContext, useState, useReducer } from 'react';
import { fetchAPI } from '../API.js';

const BookingContext = createContext();

const BookingProvider = ({ children }) => {
    const [formValues, setFormValues] = useState({
        name: '',
        date: new Date(),
        time: '',
        guests: '1',
        occasion: '',
    });

    const [submittedForms, setSubmittedForms] = useState([]);

    const currentDate = new Date();
    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(currentDate));

    function initializeTimes(date) {
        return fetchAPI(date);
    }

    function updateTimes(date) {
        return fetchAPI(date);
    }

    function reducer(state, action) {
        let newState = state;
        switch (action.type) {
            case 'update':
                const newDate = new Date(action.payload);
                newState = updateTimes(newDate);
                break;
            default:
                throw new Error();
        }
        return newState;
    }

    return (
        <BookingContext.Provider
            value={{
                formValues,
                setFormValues,
                submittedForms,
                setSubmittedForms,
                availableTimes,
                dispatch,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};

export { BookingContext, BookingProvider };