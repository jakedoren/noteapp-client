import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../AuthContext/AuthContext';
import LogoutBtn from '../auth/LogoutBtn';
import './Navbar.css'

const Navbar = () => {

    const { loggedin } = useContext(AuthContext);
    console.log(loggedin)

    return (
        <nav>
            <div className="nav-container">
                <Link to="/" className="links" >Home</Link>
                <div className="links">
                    {loggedin === false && (
                        <>
                            <Link to="/register" className="register" >Register</Link>
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
            </div>
        </nav>
    )
};

export default Navbar;
