import React from 'react';

import { useHistory, Link } from 'react-router-dom';

// REDUX ACTIONS
import { logoutUser } from '../../Redux/Actions/actions'

import { useDispatch } from 'react-redux'

import Logo from '../../img/checklist.png'
//ANTD UI LIBRARY


const NavBar = (props) => {

    const history = useHistory();

    const dispatch = useDispatch();
  
    // const logout = () => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('user_id')
    //   history.push('/');
  
    // }

    const handleLogout = (e) => {
      e.preventDefault();
      dispatch(logoutUser());
      history.push('/');
    }

    return (
      <div className="navigationContainer">

        <div className="tdt-Container">
          <div>
          <img id="companyLogo" src={Logo} alt="LogoT" />
          </div>
        </div>

        <div className="tdt-Logout">
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
      
    )
  };

export default NavBar;