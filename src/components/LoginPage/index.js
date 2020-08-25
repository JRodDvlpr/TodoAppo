import React, {useState} from 'react';

// REACT ROUTER 
import { Link } from 'react-router-dom';

// REDUX ACTIONS
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Redux/Actions/actions';

// ANTD UI LIBRARY
import { Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// IMAGES
import BrandLogo from '../../img/icons8-checklist-80.png';


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

                <div className='b-Container'>

                    <div className='b-Name'>
                        <img id='b-Logo' src={BrandLogo} alt="brandlogo"/>
                    </div>
                
                    <div className='b-Name2'>
                        <p>What todo ?</p>
                    </div>

                </div>

                <div id="signupTitle">
                    <p>Login</p>
                </div>
                

                <form
                    name="normal_login"
                    className="login-form"
                    onSubmit={handleSubmit}>

                    <div className="input-Container">

                        <Input prefix={<UserOutlined className="site-form-item-icon" />} 
                            name="username"
                            type="username" required
                            placeholder="Username" 
                            value={signIn.username}  
                            onChange={handleChange} 
                        />

                    </div>
                
                    <div className="input-Container">
                
                
                        <Input.Password
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="password" 
                            type="password" required
                            value={signIn.password}
                            placeholder="Password"
                            onChange={handleChange}
                        />
                
                    </div>
                    <div className="button-Container">

                        <button className="form-button">
                            Log In
                        </button>

                    </div>

                    <div className="alreadyuser">
                           
                           <p>Don't have an account?</p>
                           {/* Create a button for the link sign up UX/UI */}

                           <div>
                                <Link className="ml-hover" to={'/register'}>
                                    <p>Sign up</p>
                                </Link>
                            </div>
                    </div>
                </form>

                
            </div>
        </div>
    
    
    )
}

export default Login;