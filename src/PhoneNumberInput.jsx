import React, { useState } from 'react';

const PhoneNumberInput = ({ onInputChange }) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChange = (event) => {
        setPhoneNumber(event.target.value);
        onInputChange('phone', event.target.value);
    };

    return <input type="tel" value={phoneNumber} onChange={handleChange} placeholder="+234 * * **" />;
};

export default PhoneNumberInput;