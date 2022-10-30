import React, { useState } from 'react';
import { Button, Drawer, Anchor } from 'antd';

const { Link } = Anchor;

function AppHeader() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
    <div className='container-fluid'>
        <div className='header'>
            <a href="/" style={{ color: '#241c12' }}>
                <div className='logo'>
                    <span>Bidding</span>
                    <span className='for-container'>
                        <small className='for'>FOR</small>
                    </span>
                    <span>Stuffs</span>
                </div>
            </a>
            <div className="mobileHidden">
                <Anchor targetOffset="65">
                    <Link href="/#hero" title="Home" />
                    <Link href="/#about" title="About" />
                    <Link href="/#sell" title="Sell with us" />
                    <Link href="/#faq" title="FAQ" />
                    <Link href="/#team" title="Team" />
                    <Link href="/#contact" title="Contact" />
                </Anchor>
            </div>
            <div className="mobileVisible">
                <Button type="primary" onClick={showDrawer} style={{ backgroundColor: '#fff' }}>
                    <i className="fas fa-bars"></i>
                </Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                >
                <Anchor targetOffset="65">
                    <Link href="/#hero" title="Home" />
                    <Link href="/#about" title="About" />
                    <Link href="/#sell" title="Sell with us" />
                    <Link href="/#faq" title="FAQ" />
                    <Link href="/#team" title="Team" />
                    <Link href="/#contact" title="Contact" />
                </Anchor>
            </Drawer>
            </div>
        </div>
    </div>
    )
}

export default AppHeader