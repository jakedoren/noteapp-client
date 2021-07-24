import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/">Register</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Notes</Link>
        </div>
    )
};

export default Navbar;
