import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
    return <BrowserRouter>
        <Switch>
            <Route exact path="/" />
            <Route path="/register" />
            <Route path="/login" />
            <Route path="/notes" />
        </Switch>
    </BrowserRouter>
}

export default Router
