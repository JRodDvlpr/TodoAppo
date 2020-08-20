import React, {useState} from 'react';

// REACT ROUTER 
import { Link } from 'react-router-dom';

// REDUX ACTIONS
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/Actions/actions';

// ANTD UI LIBRARY
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const Login = (props) => {

    // REDUX ACTION
    const dispatch = useDispatch();

    const [signIn, setSignIn] = useState({
        username: "",
        password: ""
    });
  
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser(signIn, props));
        setSignIn({
          username:'',
          password: '',
        })
        
    }

    const handleChange = (event) => {
        event.preventDefault();
       setSignIn({...signIn, [event.target.name]: event.target.value });
    };


    return (


        <div className='loginbg'>   
            
            <div id='signCard'>

            <div id="signupTitle">
                <h2>Login</h2>
            </div>

            <form
                name="normal_login"
                className="login-form"
                onSubmit={handleSubmit}>

                <div>

                    <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                        name="username"
                        type="username" required
                        placeholder="Username" 
                        value={signIn.username}  
                        onChange={handleChange} 
                    />

                </div>
                
                <div>
                
                
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        name="password" 
                        type="password" required
                        value={signIn.password}
                        placeholder="Password"
                        onChange={handleChange}
                    />
                
                </div>
                <div>
                    
                    <Button type="primary" htmlType="submit" className="register-form-button">
                        Log In
                    </Button>

                <div className="alreadyuser">
                    Not signed up?<Link to={'/register'}>Create New User</Link>
                </div>
                </div>
            </form>

                
    </div>
    </div>
    
    
)}

export default Login;