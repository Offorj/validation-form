import React, { useState } from 'react';

const EmailInput = ({ onInputChange }) => {
    const [email, setEmail] = useState('');

    const handleChange = (event) => {
        setEmail(event.target.value);
        onInputChange('email', event.target.value);
    };

    return <input type="email" value={email} onChange={handleChange} placeholder="example@gmail.com" />;
};

export default EmailInput