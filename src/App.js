import React from 'react';
import './stylesheet/style.css';

import { Route, Switch, Redirect } from 'react-router-dom';

// Protected Route requires Tokens
import PrivateRoute from './utils/restrictedRoute';

// Register-Login Components
import Login from './components/LoginPage/index';
import Register from './components/RegisterPage/index.js';
import Main from './components/MainPage/index.js';

// DASHBOARD AND NAVIGATION
import Dashboard from './components/Dashboard/index.js';
import editTask from './components/Dashboard/EditForm.js';




function App() {
  

  return (

    <div>
      
    {     
    localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('userId')}`} /> : <Route exact path="/" component={ Main } />
    }	

    <Switch>
    
    <Route exact path="/register" component={ Register } />
    <Route exact path="/login" component={ Login } />
    
    <PrivateRoute exact path="/dashboard/:id" component={ Dashboard }  />
    <PrivateRoute exact path="/edit/:id" component={ editTask } />
    
   
    </Switch>
    

    </div>

  )
}

export default App;
