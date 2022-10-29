import React from 'react'
import { Collapse } from 'antd'
const { Panel } = Collapse;

function AppFaq() {
    return (
        <div id='faq' className='block faqBlock'>
            <div className='container-fluid'>
                <div className='titleHolder'>
                    Frequently Asked Questions
                </div>
                <Collapse defaultActiveKey={[1]} style={{ width: '98.3%', color: '#65676d', fontFamily: 'Nunito' }}>
                    <Panel header="How is the stuff sold? Can I just buy stuff outright? How do I bid?" key="1">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate repellendus laborum eligendi numquam quaerat tempora ex, delectus ipsa unde quibusdam.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate repellendus laborum eligendi numquam quaerat tempora ex, delectus ipsa unde quibusdam.</p>
                    </Panel>
                    <Panel header="What do I need to do, and what does “register or login” mean?" key="2">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, suscipit. Maxime eligendi placeat a minus, minima dolorem in ab ea.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, suscipit. Maxime eligendi placeat a minus, minima dolorem in ab ea.</p>
                    </Panel>
                    <Panel header="Where does all the stuff come from?" key="3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p>
                    </Panel>
                    <Panel header="When do I pay? What forms of payment do you take?" key="3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p>
                    </Panel>
                    <Panel header="I just paid, can I take my item? What if my item doesn’t fit in my car can I get it later?" key="3">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default AppFaq