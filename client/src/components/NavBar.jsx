import React from 'react'
import { Input, Space, Layout, Menu} from 'antd'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

const { Header } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);

function NavBar() {

	const logOut = ()=>{
		fetch(`/api/logout`,{
			method: "DELETE"
		})
		.then(res=>{
			if(res.ok){
				toast('Logout successful')
			}else{
				toast('Something went wrong')
			}
		})
		.catch(err=>toast(err.message))
	}

    return (
        <div>
            <div style={{ position: 'fixed', width: '100%', zIndex: '10' }}>
                <div className='top-header'>
                    <div>
                        <span>Hi!</span>
                        <span><Link to="/login">Login</Link></span>
                        <span>Or</span>
                        <span><Link to="signup">Register</Link></span>
                    </div>
                    <div>
                        <Space direction='vertical'>
                            <Search placeholder="input search text" onSearch={onSearch} enterButton />
                        </Space>
                    </div>
                </div>
                <Header style={{ backgroundColor: '#ECC13B', display: 'flex', justifyContent: 'space-between', marginLeft: '-12px', marginRight: '-8px' }}>
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
                {/* <Menu className='menu-fonts'
                    theme="dark"
                    mode="horizontal"
                    items = {
                        [
                            { label: 'About', key: 'about' },
                        { label: 'Contact Us', key: 'contact' },
                        ]
                    }
                /> */}
                <Menu className='menu-fonts' style={{ display: 'flex', alignItems: 'center', backgroundColor: '#ECC13B' }}>
                    <div className='hover-links' style={{ marginRight: '40px'}}>
                        <a href="/" style={{ color: '#251E8C' }}>Home</a>
                    </div>
                    <div className='hover-links' style={{ marginRight: '40px'}}>
                        <a href='#about' style={{ color: '#251E8C' }}>About</a>
                    </div>
                    <div className='hover-links' style={{ marginRight: '4px'}}>
                        <a href='#contact' style={{ color: '#251E8C' }}>Contact</a>
                    </div>
										<div className='hover-links' style={{ marginRight: '4px', marginLeft:'3%'}}>
                        <a onClick={logOut} href='#' style={{ color: '#251E8C' }}>Logout</a>
                    </div>
                </Menu>
                </Header>
            </div>
						<ToastContainer/>
            <div style={{ height: '100%', marginTop: '102px' }}>
                <div className='hero-img'>
                </div>
            </div>
        </div>
    )
}

export default NavBar;

