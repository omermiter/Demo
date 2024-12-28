import React from 'react';
import "../styles/navbar.css"

function Navbar(){
    return (
        <nav className='navbar'>
            <div className='links-cont'>
                <a href='#'>About Us</a>
                <a href='#'>Reviews</a>
                <a href='#'>Login</a>
                <a href='#plans' className='cta'>Our Plans</a>
            </div>
        </nav>
    );
}

export default Navbar;