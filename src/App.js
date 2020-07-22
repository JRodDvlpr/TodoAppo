import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// Protected Route requires Tokens
import PrivateRoute from './utils/restrictedRoute';

// Register-Login Components
import Login from './components/Forms/Login/index';
import Register from './components/Forms/Register/index';


// DASHBOARD AND NAVIGATION
// import Nav from './components/Navigation/NavBar';
import Dashboard from './components/Dashboard/index';





function App() {
  return (
    
    <main>

    {/* <Nav /> */}

    <Switch>
    <Route exact path="/" component={ Register } />
    <Route exact path="/register" component={ Register } />
    <Route exact path="/login" component={ Login } />
    
    <PrivateRoute exact path="/dashboard" component={ Dashboard } />
    {/* <PrivateRoute exact path="/" component={} />
    <PrivateRoute exact path="/" component={} /> */}
      
    </Switch>

    </main>

  )
}

export default App;
