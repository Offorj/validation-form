import React, { useState } from 'react';
import NameInput from './NameInput';
import EmailInput from './EmailInput';
import PhoneNumberInput from './PhoneNumberInput';


const FormComponent = () => {
    const [inputs, setInputs] = useState({ name: '', email: '', phone: '' });

    const handleInputChange = (type, value) => {
        setInputs(prevState => ({
         ...prevState,
            [type]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputs.name ||!inputs.email ||!inputs.phone) {
            alert("All fields are required.");
            return;
        }
        // Corrected line below
        alert(`Name: ${inputs.name}, Email: ${inputs.email}, Phone: ${inputs.phone}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <NameInput onInputChange={handleInputChange} />
            <br />

            <label htmlFor="email">Email:</label>
            <EmailInput onInputChange={handleInputChange} />
            <br />

            <label htmlFor="phone">Phone:</label>
            <PhoneNumberInput onInputChange={handleInputChange} />
             <br />
            <button type="submit" className='bot'>Submit</button>
        </form>
    );
};
export default FormComponent;