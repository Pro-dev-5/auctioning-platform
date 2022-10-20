import React from 'react'
import { Button, Layout, Menu } from 'antd'
import '../styles/Nav.css'


const { Header, Content, Footer } = Layout;

function NavBar() {
    return (
        <div>
            <Layout className="layout">
                <Header style={{ backgroundColor: '#ECC13B', display: 'flex', justifyContent: 'space-between' }}>
                {/* <div className="logo" /> */}
                <a href='/'>
                    <div className='menu-fonts' style={{ color: '#251E8C', padding: '0 20px' }}>
                        <span>Bidding</span>
                        <span className='for-container'>
                            <small className='for'>FOR</small>
                        </span>
                        <span>Stuffs</span>
                    </div>
                </a>
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
                    padding: '0 50px',
                }}
                >
                <div className="site-layout-content">Content
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

