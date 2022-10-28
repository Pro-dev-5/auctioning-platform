import React from 'react'
import { Divider, Card } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined, PhoneOutlined } from '@ant-design/icons';

const { Meta } = Card;

function About() {
    return (
    <div>
        <div>
            {/* About us section*/}
            <div style={{ paddingTop: '80px' }} id="about">
                <Divider orientation="left" className='divider' style={{ marginBottom: '80px' }}>What we do</Divider>
                <div  style={{ backgroundColor: '#fdfaec', margin: '-40px', padding: '60px 40px'}}>
                    <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                        <div flex={3} style={{ marginRight: '60px' }}>
                            <img src="../../public/images/aboutus.svg" alt="" style={{ width: '500px' }} />
                        </div>
                        <div flex={3} className="-text">
                            <img src="../../public/images/ceramic.jpg" alt="" style={{ width: '300px', position: 'absolute', bottom: '10px', right: '200px', zIndex: '-1', opacity: '.1' }}/>
                            <Meta 
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum."
                            />

                            <Meta style={{ marginBottom: '30px', marginTop: '20px' }}
                                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, reprehenderit esse dolorum consectetur autem similique ex fuga repellat quos vitae a tempore? Quisquam ab dolore pariatur, excepturi ratione aut ipsum."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About