/* eslint-disable linebreak-style */
import React from 'react';
import './App.css';
import TicketStatus from './components/TicketStatus';
import Navigation from './components/Navigation';

export default function App() {
    return (
        <div className="App">
            <Navigation />
            <TicketStatus />
        </div>
    );
}
