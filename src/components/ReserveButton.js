import React from 'react';

const ReserveButton = ({ onReserve }) => {
    return (
        <button onClick={onReserve} className="reserve-button">
            Reserve a Table
        </button>
    );
};

export default ReserveButton;