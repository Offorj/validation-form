import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importing the main App component

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>
);
export default App