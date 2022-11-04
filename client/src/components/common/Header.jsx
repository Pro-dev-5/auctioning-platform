import React, { useState } from 'react';
import { Button, Drawer, Anchor, Col, Row } from 'antd';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
const { Link } = Anchor;

function AppHeader({ switchDisp, setSwitchDisp }) {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()

		const logOut = ()=>{
			fetch(`/api/logout`,{
				method: "DELETE"
			})
			.then(res=>{
				if(res.ok){
					toast('Logout successful')
					setSwitchDisp(false)
				}
			})
			.catch(err=>toast(err.message))
		}

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
	const toggleLogIn = switchDisp ? "none" : "flex"
	const toggleLogOut = switchDisp ? "block" : "none"

    return (
        <div>
            <div style={{ backgroundColor: '#fff' }}>
                <div className='container-fluid'>
                    <div style={{ display: toggleLogIn, alignItems: 'center', padding: '4px 0', fontFamily: 'Nunito' }}>
                        <span style={{ marginRight: '6px' }}>Hi,</span>
                        <span onClick={()=>navigate("/login")} style={{ color: '#f3c180', cursor: 'pointer' }}>Login</span>
                        <span style={{ margin: '0 6px' }}>or</span>
                        <span onClick={()=>navigate("/signup")} style={{ color: '#f3c180', cursor: 'pointer' }}>Register</span>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='header'>
                    <div className="logo">
                        <a href="/" style={{ color: '#241c12' }}>
                            <div className='logo'>
                                <span>Bidding</span>
                                <span className='for-container'>
                                    <small className='for'>FOR</small>
                                </span>
                                <span>Stuffs</span>
                            </div>
                        </a>
                    </div>
                    <div className="mobileHidden">
                        <Anchor targetOffset="65" style={{ fontFamily: 'Nunito', fontWeight: '700' }}>
                            <Link href="/#hero" title="Home" />
                            <Link href="/#about" title="About" />
                            <Link href="/#sell" title="Sell with us" />
                            <Link href="/#faq" title="FAQ" />
                            <Link href="/#team" title="Team" />
                            <Link href="/#contact" title="Contact" />
                            <Link href='/'><span style={{display: toggleLogOut}} onClick={logOut}>Logout</span></Link>
                        </Anchor>
                    </div>
                    
                    <div className="mobileVisible">
                        <i onClick={showDrawer} className="fa fa-bars" style={{ fontSize: '24px', color: '#241c12' }}></i>
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
                                <Link href='/'><span style={{display: toggleLogOut}} onClick={logOut}>Logout</span></Link>
                            </Anchor>
                        </Drawer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppHeader
