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
                <div style={{ color: '#251E8C' }}>Logo</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    items = {
                        [
                            { label: 'Jewels', key: 'jewels' },
                            { label: 'Arts', key: 'arts' },
                            { label: 'Ceramics', key: 'ceramics' },
                            { label: 'Vehicles', key: 'vehicles' },
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
                <Button type="primary">Hello</Button>
                </div>
                </Content>
                <Footer
                style={{
                    textAlign: 'center',
                }}
                >
                Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    )
}

export default NavBar;

