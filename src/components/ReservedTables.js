import React from 'react';

function ReservedTables({formValues}) {

    return (
        <>
            <p>{formValues.date} @ {formValues.time}</p>
            <p>{formValues.name} - {formValues.guests} guests - {formValues.occasion}</p>
            <hr />
        </>
    );
}

export default ReservedTables;