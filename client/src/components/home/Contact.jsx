import React from 'react'
import { Row, Col, List } from 'antd'

function AppContact() {
    return (
        <div id='contact' className='block contactBlock'>
            <div className="container-fluid">
                <div className="titleHolder">
                    Contact us
                </div>
                <Row gutter={[32, 32]} align="middle" justify='space-between' wrap="true">
                    <Col span={12}>
                        <div>                            
                            <img src="/images/contact.svg" alt="" style={{ width: '100%' }} />
                        </div>
                    </Col>
                    <Col span={12}>
                        <div style={{ width: '100%', fontFamily: 'Nunito', color: '#65676d' }}>                            
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, totam dolor nemo vero laudantium quam? Quisquam vero facilis dignissimos aliquam consequatur! Velit necessitatibus quaerat, alias ipsum corrupti deleniti ad consequuntur.</p>
                            <Row gutter={[32, 32]} align="middle" justify='space-between' wrap="true">
                                <Col span={8}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '35px', height: '35px', color: '#f3c180' }}>
                                            <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
                                        </svg>
                                        <span style={{ marginLeft: '6px' }}>+25470000001</span>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '35px', height: '35px', color: '#f3c180' }}>
                                            <path fillRule="evenodd" d="M2.106 6.447A2 2 0 001 8.237V16a2 2 0 002 2h14a2 2 0 002-2V8.236a2 2 0 00-1.106-1.789l-7-3.5a2 2 0 00-1.788 0l-7 3.5zm1.48 4.007a.75.75 0 00-.671 1.342l5.855 2.928a2.75 2.75 0 002.46 0l5.852-2.926a.75.75 0 10-.67-1.342l-5.853 2.926a1.25 1.25 0 01-1.118 0l-5.856-2.928z" clipRule="evenodd" />
                                        </svg>
                                        <span style={{ marginLeft: '6px' }}>info@bidnow.biz</span>
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: '35px', height: '35px', color: '#f3c180' }}>
                                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                        </svg>
                                        <span style={{ marginLeft: '6px' }}>Nairobi, Kenya</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>         
        </div>
    )
}

export default AppContact