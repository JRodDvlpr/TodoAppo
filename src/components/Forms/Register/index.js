import React, {useState} from 'react';
import {Link  } from 'react-router-dom';


import { useDispatch } from 'react-redux';
import { registerUser } from '../../../store/actions'

import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';



const Register = (props) => {
    // console.log("props in register", props);
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
            <Form.Item
                
                rules={[{ required: true, message: 'Please input your Username!' }]}>

                <Input prefix={<UserOutlined className="site-form-item-icon" />} name="username"
                type="text" value={user.username} placeholder="Username"  onChange={handleChange} />

            </Form.Item>
            <Form.Item
                
                rules={[{ required: true, message: 'Please input your Password!' }]}
                >

                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />} name="password" type="password" value={user.password}
                    placeholder="Password" onChange={handleChange}
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



export default Register;