import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReserveButton = () => {
    const navigate = useNavigate();

    const handleReserve = () => {
        navigate('/reservations');
    };

    return (
        <button onClick={handleReserve} className="reserve-button">
            Reserve a Table
        </button>
    );
};

export default ReserveButton;