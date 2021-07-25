import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const Router = () => {
    return <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact path="/" />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/notes" />
        </Switch>
    </BrowserRouter>
}

export default Router
