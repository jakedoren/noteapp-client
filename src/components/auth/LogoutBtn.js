import axios from 'axios'
import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import AuthContext from '../../AuthContext/AuthContext';
import { CgLogOut } from 'react-icons/cg'
import { IconContext } from "react-icons";

export default function LogoutBtn() {

    const authService = 'http://localhost:8080/auth/logout';
    const { getLoggedIn } = useContext(AuthContext);
    const history = useHistory();

    async function logOut() {
        await axios.get(authService);
        await getLoggedIn();
        history.push('/');
    }

    return <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}> <CgLogOut className="logout" onClick={logOut} color="#7DBA40" size="1.5em"></CgLogOut> </IconContext.Provider>
    
    
}
