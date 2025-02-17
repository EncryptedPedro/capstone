import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReserveButton = () => {
    const navigate = useNavigate();

    const handleReserve = () => {
        navigate('/reservations');
    };

    return (
        <button onClick={handleReserve} className="reserve-button">
            New Reservation
        </button>
    );
};

export default ReserveButton;