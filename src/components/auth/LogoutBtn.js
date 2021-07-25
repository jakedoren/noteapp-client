import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext/AuthContext';

export default function LogoutBtn() {

    const authService = 'http://localhost:8080/auth/logout';
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function logOut() {
        await axios.get(authService);
        await getLoggedIn();
        history.push('/');
    }

    return <button onClick={logOut} >Log Out</button>
}
