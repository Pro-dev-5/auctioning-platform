import React from 'react'
import { BackTop } from 'antd'

function AppFooter() {
    return (
        <div className='container-fluid'>
            {/* <div className="footer" style={{ fontFamily: 'Averia Libre Serif' }}>
                <div className='logo'>
                    <span>Bidding</span>
                    <span className='for-container'>
                        <small className='for'>FOR</small>
                    </span>
                    <span>Stuffs</span>
                </div>
            </div> */}
            <p style={{ fontFamily: 'Nunito' }}>©2022 Bidding For Stuffs, All Rights Reserved.</p>
            <BackTop>
                <div className='goTop'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ backgroundColor: '#fff' }}>
                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                </svg>
                </div>
            </BackTop>
        </div>
    )
}

export default AppFooter