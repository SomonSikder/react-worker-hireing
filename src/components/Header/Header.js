import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <h2>Hire Your Worker</h2>
            <h2>Your Budget Max Would Be: <span className='budget'> 20,000</span></h2>
        </div>
    );
};

export default Header;