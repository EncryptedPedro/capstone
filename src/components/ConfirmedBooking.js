import React from 'react';
import ReserveButton from './foundations/ReserveButton';

function ConfirmedBooking() {
    return (
        <main>
            <div className='content'>
                <h2>
                    Booking confirmed!
                </h2>
                <ReserveButton />
            </div>
        </main>
    );
}

export default ConfirmedBooking;