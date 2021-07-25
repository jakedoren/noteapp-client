import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';
const AuthContext = createContext();

const AuthContextProvider = (props) => {
    const [loggedin, setLoggedIn] = useState(undefined);
    const authService = 'http://localhost:8080/auth/loggedin'

    async function getLoggedIn() {
        const loggedInRes = await axios.get(authService);
        setLoggedIn(loggedInRes.data);
    }

    useEffect(() => {
        getLoggedIn();
    }, [])

    return <AuthContext.Provider value={{loggedin, getLoggedIn}} >
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;
export {AuthContextProvider};
