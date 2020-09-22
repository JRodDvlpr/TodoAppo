import React from 'react';
import './stylesheet/style.css';
import { Route } from 'react-router-dom';

// Protected Route requires Tokens
import PrivateRoute from './utils/restrictedRoute';

// Register-Login Components
import Login from './components/LoginPage/index';
import Register from './components/RegisterPage/index.js';
import Main from './components/MainPage/index.js';

// DASHBOARD AND NAVIGATION
import Dashboard from './components/Dashboard/index.js';
import AddTask from './components/Dashboard//AddTask.js';

//Components
import Nav from './components/Navigation/NavBar.js';
import Footer from './components/Dashboard/Footer.js'


function App() {

  return (

    <div>
      <Nav />
    {/* {     
    localStorage.getItem('token') ? <Redirect to={`/dashboard/${localStorage.getItem('id')}`} /> : null
    }	       */}
    <PrivateRoute exact path="/dashboard/:id" component={ Dashboard }  />
    <PrivateRoute exact path="/addtask" component={ AddTask } />
    <Route exact path="/" component={ Main } />
    <Route exact path="/register" component={ Register } />
    <Route exact path="/login" component={ Login } />

    <Footer />

    </div>

  )
}

export default App;
