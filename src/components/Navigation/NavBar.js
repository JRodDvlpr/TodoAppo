import React from 'react';

import { useHistory } from 'react-router-dom';

// REDUX ACTIONS
import { logoutUser } from '../../Redux/Actions/actions'

import { useDispatch } from 'react-redux'

import Logo from '../../img/icons8-checklist-80.png'
//ANTD UI LIBRARY


const NavBar = () => {

  const history = useHistory();

  const dispatch = useDispatch();
 
  // REMOVES TOKEN
  const handleLogout = (e) => {
  e.preventDefault();
  dispatch(logoutUser());
  history.push('/login');
  }

  return (
    <div className="navigationContainer">
      <div></div>

      <div>
        <img id="companyLogo" src={Logo} alt="LogoT" />
      </div>
        
      
      <div className="tdt-Logout">
        <button id="logOut-btn" onClick={handleLogout}>Logout</button>
      </div>

        
     
    </div>
      
  )
};

export default NavBar;