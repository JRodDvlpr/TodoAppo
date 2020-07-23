import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const Restricted = ({ component: Component, ...props }) => (
    <Route 
        {...props}
        render={() => 
            localStorage.getItem('token') ? (
            <Component />
        ) : ( 
            <Redirect to='/' />
        )
        }
    />
);

export default Restricted;