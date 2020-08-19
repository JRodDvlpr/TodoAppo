import React from 'react';
import { Link } from 'react-router-dom';

// AVATAR IMAGES //
import Image1 from '../../img/undraw_duplicate_xac4.png'
import Image2 from '../../img/undraw_browsing_online_sr8c.png'

// ANTD UI LIBRARY // 
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
            <Meta title="Sign Up" />
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
            <Meta title="Existing User" />
            </Card>
            </Link>
            </div>

        </div>
        </div>
    )
}

export default MainSign;