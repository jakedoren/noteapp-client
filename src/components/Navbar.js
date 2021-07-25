import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../AuthContext/AuthContext';
import LogoutBtn from './auth/LogoutBtn';

const Navbar = () => {

    const { loggedin } = useContext(AuthContext);
    console.log(loggedin)

    return (

        <div>
            <Link to="/">Home</Link>
            {loggedin === false && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Log In</Link>
                </>
            )}
            {loggedin === true && (
                <>
                    <Link to="/notes">Notes</Link>
                    <LogoutBtn />
                </>
            )}
        </div>
    )
};

export default Navbar;
