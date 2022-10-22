import React from 'react'
import { Divider, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, PhoneOutlined } from '@ant-design/icons';

const { Meta } = Card;

function Contact() {
return (
    <div>
        {/* Contact us section*/}
        <div style={{ paddingTop: '80px' }} id="contact">
            <Divider orientation="right" className='divider' style={{ marginBottom: '80px' }}>Want to keep in touch?</Divider>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div flex={3} className="about-text">
                    <PhoneOutlined key="phone" />
                        <Meta
                            title="Phone Number"
                            description="(923) 507-1154"
                        />
                        
                        <Meta style={{ marginBottom: '30px', marginTop: '20px' }}
                            title="Email Address"
                            description="techie@optonline.net"
                        />
                        
                        <Meta style={{ marginBottom: '30px', marginTop: '20px' }}
                            title="Address"
                            description="7287 South Nut Swamp Drive
                            Trussville, AL 35173"
                        />
                        
                        <Meta style={{ marginBottom: '30px', marginTop: '20px' }}
                            title="Location"
                            description="George Town, United Kingdom"
                        />
                    </div>
                        <div flex={3} style={{ marginLeft: '60px' }}>
                        <img src="../../public/images/contact.svg" alt="" style={{ width: '500px' }} />
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Contact