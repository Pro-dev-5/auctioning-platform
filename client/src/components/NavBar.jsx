import React from 'react'
import { Input, Space, Layout, Menu } from 'antd'
import '../styles/Nav.css'
import { Link } from 'react-router-dom';
// import { AudioOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

function NavBar() {
    return (
        <div>
            <Layout className="layout">
                <div className='top-header'>
                    <div>
                        <span>Hi!</span>
                        <span><Link to="">Login</Link></span>
                        <span>Or</span>
                        <span><Link to="">Register</Link></span>
                    </div>
                    <div>
                        <Space direction='vertical'>
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        </Space>
                    </div>
                </div>
                <Header style={{ backgroundColor: '#ECC13B', display: 'flex', justifyContent: 'space-between' }}>
                {/* <div className="logo" /> */}
                <Link to="/">
                    <div className='logo' style={{ color: '#251E8C', padding: '0px' }}>
                        <span>Bidding</span>
                        <span className='for-container'>
                            <small className='for'>FOR</small>
                        </span>
                        <span>Stuffs</span>
                    </div>
                </Link>
                <Menu className='menu-fonts'
                    theme="dark"
                    mode="horizontal"
                    items = {
                        [
                            { label: 'About', key: 'about' },
                            { label: 'Contact Us', key: 'contact' },
                        ]
                    }
                />
                </Header>
                <Content
                style={{
                    padding: '0 28px',
                }}
                >
                <div className="site-layout-content" style={{ position: 'relative' }}>
                    <h1 className="">Categories</h1>
                    <div style={{ height: '6px', backgroundColor: '#ECC13B', width: '80px', position: 'absolute', top: '60px', left: '60px'}}></div>
                </div>
                </Content>
                <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                    ©2022 Bidding For Stuffs, All Rights Reserved.
                </Footer>
            </Layout>
        </div>
    )
}

export default NavBar;

