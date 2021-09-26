import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header text-center bg-opacity-25 p-2">
            <h1 className="text-primary mb-3">Welcome to Programmer's Site</h1>
            <p className="fs-5">Here you can find so many professional programmer as you want. You can also heir them for your projects</p>
            <h1 className="text-danger">Total Budget: 100 Billion</h1>
        </div>
    );
};

export default Header;