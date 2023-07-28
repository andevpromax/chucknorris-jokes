// libs
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// context
import { JokesProvider } from './context/JokesProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <JokesProvider>
        <App />
    </JokesProvider>
);
