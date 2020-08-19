import React, {useState} from 'react';

// REACT ROUTER DOM
import { Link  } from 'react-router-dom';

// REDUX
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Redux/Actions/actions'

// ANTD UI LIBRARY
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



const Register = (props) => {
    
    // REDUX ACTION
    const dispatch = useDispatch();
    
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
  
    const handleSubmit = (event) => {
        console.log("NewUser in handle", user);
        event.preventDefault();
        dispatch(registerUser(user, props));
        setUser({
            username: '',
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
            <div id="signupTitle">
                <h2>Sign Up</h2>
            </div>
            <form
                name="normal_login"
                className="login-form"
                onSubmit={handleSubmit}
                >
            <div>

                <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    name="username" required
                    type="text" 
                    value={user.username} 
                    placeholder="Username"  
                    onChange={handleChange} 
                />

            </div>
            <div>

                
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    name="password" 
                    type="password" required
                    value={user.password}
                    placeholder="Password"
                    onChange={handleChange}
                />  
            
            </div>
            <div>
                <Button type="primary" htmlType="submit" className="register-form-button">
                    Register
                </Button>
                <div className="alreadyuser">
                <p>Already signed up?</p><br/><Link to={'/login'}>Log In</Link>
                </div>
            </div>
            </form>

                
    </div>
    </div>
    
    
)}



export default Register;