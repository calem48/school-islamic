import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProviderFilter } from './context/contextFilter';
import { AppProviderSchool } from './context/schoolContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <AppProviderFilter>
        <AppProviderSchool>
            <App />
        </AppProviderSchool>
    </AppProviderFilter>

);




