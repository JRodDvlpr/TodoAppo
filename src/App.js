import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import { Redirect } from 'react-router'

// Protected Route requires Tokens
import PrivateRoute from './utils/restrictedRoute';

// Register-Login Components
import Login from './components/Forms/Login/index.js';
import Register from './components/Forms/Register/index.js';
import Main from './components/Forms/SignLogPage/index.js';
import AddTodo from './components/Forms/Todo/index.js'

// DASHBOARD AND NAVIGATION

import Dashboard from './components/Dashboard/index.js';





function App(props) {
  return (
    
    <main>

    {/* <Nav /> */}

    {/* {     
    localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('id')}`} /> : null
    }	       */}

    <Switch>
    <Route exact path="/" component={ Main } />
    <Route exact path="/register" component={ Register } />
    <Route exact path="/login" component={ Login } />
    
    <PrivateRoute exact path="/dashboard" component={ Dashboard }  />
    <PrivateRoute exact path="/addtask" component={ AddTodo } />
    {/* <PrivateRoute exact path="/edit/:id" component={} /> */}
      
    </Switch>

    </main>

  )
}

export default App;
