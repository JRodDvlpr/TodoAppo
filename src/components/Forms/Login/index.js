import React, {useState} from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { loginUser } from '../../../store/actions';

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Login = () => {

    const dispatch = useDispatch();



    const [signIn, setSignIn] = useState({
        username: "",
        password: ""
    });
  
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(loginUser(signIn));
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
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}>
                <Input prefix={<UserOutlined className="site-form-item-icon" />} type="username" placeholder="Username"  onChange={handleChange} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
                >

                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="register-form-button">
                    Register
                </Button>
                <div className="alreadyuser">
                Already signed up?<Link to={'/login'}>Log In</Link>
                </div>
            </Form.Item>
            </form>

                
    </div>
    </div>
    
    
)}

export default Login;