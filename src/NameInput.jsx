import React, { useState } from 'react';
const NameInput = ({ onInputChange }) => {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
        onInputChange('name', event.target.value);

    };
    return <input type="text" value={name} onChange={handleChange} placeholder='John Doe' />

};
export default NameInput;