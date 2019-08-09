import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import React from 'react';

export default _ => (
    <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/dev/:id" component={Main} />
    </BrowserRouter>
);