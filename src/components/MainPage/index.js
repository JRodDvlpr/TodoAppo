import React from 'react';
import { Link } from 'react-router-dom';

// AVATAR IMAGES //
import Image1 from '../../img/undraw_duplicate_xac4.png'
import Image2 from '../../img/undraw_browsing_online_sr8c.png'

// ANTD UI LIBRARY // 
import { Card } from 'antd';



const MainSign = () => {

    return (
        <div className="main">

        <div className='main-Sign'>
       
            <div className='mainCards'>

            <div className="mainTitle">
                <p>Sign Up</p>
            </div>
            <Link to={'/register'}>
            <Card
            hoverable
            style={{ width: 250 }}
            cover={<img alt="example" src={Image1}/>}
            >
            </Card>
            </Link>
            </div>

            <div className='mainCards'>
            <div className="mainTitle">
                <p>Log In</p>
            </div>
            <Link to={'/login'}>
            <Card
            hoverable
            style={{ width: 250 }}
            cover={<img alt="example" src={Image2} />}
            >
            </Card>
            </Link>
            </div>

        </div>
        </div>
    )
}

export default MainSign;