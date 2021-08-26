import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AuthContext from './AuthContext/AuthContext';
import Home from './components/pages/Home';
import Notes from './components/pages/Notes'

const Router = () => {

    const { loggedin } = useContext(AuthContext);

    return <BrowserRouter>
        <Navbar />
        <Switch>

            <Route exact path="/" component={Home} />
            {loggedin === false && (
                <>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </>
            )}
            {loggedin === true && <> 
                <Route path="/notes" component={Notes} /> 
            </>}
        </Switch>
    </BrowserRouter>
}

export default Router
