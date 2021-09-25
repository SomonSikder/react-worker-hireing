import React from 'react';
import './TotalCosting.css';
const TotalCosting = () => {
    return (
        <div className='total-costing-card'>
            <h2 className='total-worker'>Total Worker : </h2>
            <p>Your Cost Will be : <span className='total-cost'>00</span></p>
            <h3 className='worker-name'>Worker Name: Somon</h3>
        </div>
    );
};

export default TotalCosting;