import React, {useState} from 'react';

// REACT ROUTER DOM
import { Link  } from 'react-router-dom';

// REDUX
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/Actions/actions'

// ANTD UI LIBRARY
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


// IMAGES
import BrandLogo from '../../img/icons8-checklist-80.png';



const Register = (props) => {
    
    // REDUX ACTION
    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });
  
    const handleSubmit = (event) => {
 
        event.preventDefault();
        dispatch(registerUser(user, props));
        setUser({
            username: '',
            email: '',
            password: ''
        })
           
    }

    const handleChange = (event) => {
       event.preventDefault();
       setUser({...user, [event.target.name]: event.target.value });
    };

    
    return (


        <div className='loginbg'>   
            
            <div id='signCard'>

                <div className='b-Container'>

                    <div className='b-Name'>
                        <img id='b-Logo' src={BrandLogo} alt="brandlogo"/>
                    </div>
                
                    <div className='b-Name2'>
                        <p>What todo ?</p>
                    </div>

                </div>

            <div id="signupTitle">
                <p>Sign up for free and start crushing your task.</p>
            </div>
           
        <form
            name="normal_login"
            className="login-form"
            onSubmit={handleSubmit}>

            <div className="input-Container">

                <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    name="username" required
                    type="text" 
                    value={user.username} 
                    placeholder="Username"  
                    onChange={handleChange} 
                />

            </div>

            <div className="input-Container">

                <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    name="email" required
                    type="text" 
                    value={user.email} 
                    placeholder="Email"  
                    onChange={handleChange} 
                />

            </div>

            

            <div className="input-Container">

                
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    name="password" 
                    type="password" required
                    value={user.password}
                    placeholder="Password"
                    onChange={handleChange}
                />  
            
            </div>

            

                <div className="button-Container">
                    <button className="form-button">
                    Sign up
                    </button>
                </div>

                <div className="alreadyuser">

                    <p>Have an account?</p>

                    <div>
                        <Link className="ml-hover" to={'/login'}>
                            <p>Log In</p>
                        </Link>
                    </div>

                </div>
            
        </form>

                
    </div>
    </div>
    
    
)}



export default Register;