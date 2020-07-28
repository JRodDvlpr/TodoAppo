import React from 'react';
import { Link } from 'react-router-dom';

import Image1 from '../../img/undraw_duplicate_xac4.png'
import Image2 from '../../img/undraw_browsing_online_sr8c.png'
// ANTD UI
import { Card } from 'antd';

const { Meta } = Card;

const MainSign = () => {

    return (
        <div className="main">

        <div className='main-Sign'>
       
            <div className='mainCards'>

            <div className="mainTitle">
                <p>Create a new account.</p>
            </div>
            <Link to={'/register'}>
            <Card
            hoverable
            style={{ width: 350 }}
            cover={<img alt="example" src={Image1}/>}
            >
            <Meta title="Sign Up" description="Click Here" />
            </Card>
            </Link>
            </div>


            <div className='mainCards'>
            <div className="mainTitle">
                <p>Log In with your account.</p>
            </div>
            <Link to={'/login'}>
            <Card
            hoverable
            style={{ width: 350 }}
            cover={<img alt="example" src={Image2} />}
            >
            <Meta title="Existing User" description="Click Here" />
            </Card>
            </Link>
            </div>

        </div>
        </div>
    )
}

export default MainSign;