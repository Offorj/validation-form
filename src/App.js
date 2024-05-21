import React from 'react';
import ReactDOM from 'react-dom';
import FormComponent from './FormComponent'; // Adjust the path according to your project structure
import './App.css';
function App() {
  return (
    <div className='container'>
      <h1>Registration Form</h1>
      <FormComponent />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App