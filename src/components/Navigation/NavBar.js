import React from 'react';

import { useHistory } from 'react-router-dom';


//ANTD UI LIBRARY
import { Layout, Menu } from 'antd';
import { UserOutlined} from '@ant-design/icons';
const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const NavBar = () => {

    const history = useHistory();
  
    // const logout = () => {
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('user_id')
    //   history.push('/');
  
    // }
    return (
      <>
      <Layout>
      
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          </Menu>
          </Sider>
          <Layout>
          <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
            >
          
        </Content>
        </Layout>
      
      </Layout>
      </>
    );
  };

export default NavBar;