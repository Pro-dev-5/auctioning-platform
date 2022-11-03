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
                    <Panel header="How are the products sold? Can I just buy products outright? How do I bid?" key="1">
                        <p>Bidding products are sold through a bidding process. This process allows customers to place bids on products that they are interested in. The highest bidder wins the product.</p>
                        <p>In our application, it is generally recommended that you do not buy the product outright so as to enhance security and better customer service.
                            You can try to buy outright, but the seller may not be willing to sell the item outside of the auction.
                        </p>
                    </Panel>
                    <Panel header="What do I need to do, and what does “register or login” mean?" key="2">
                        <p>You will need to create an account on our website in order to purchase products, access your order history, and manage your account information. Creating an account is quick, easy, and free!</p>
                        <p>"Register or login" means that the visitor needs to either register for the website, or login if they have already registered.</p>
                    </Panel>
                    <Panel header="Where does all the products come from?" key="3">
                        <p>The products come from different parts of the country, depending on the seller's location.</p>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p> */}
                    </Panel>
                    <Panel header="When do I pay? What forms of payment do you take?" key="4">
                        <p>After the sale closes, we will send you an invoice by email. Payment is due within 3 days of the close of the sale. We take credit cards, cash, checks and money orders.</p>
                        {/* <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum reiciendis asperiores maiores voluptates nesciunt. Unde mollitia perferendis tempore voluptate architecto.</p> */}
                    </Panel>
                    <Panel header="I am new to online bidding. How does the process work?" key="6">
                        <p>Registering to bid is quick and easy. Simply click on the 'Register to Bid' link at the top of the page and fill out the registration form. Once your registration is complete and approved, you will be ready to start bidding!</p>
                        <p>To bid on an item, simply click the 'Bid Now' button on the item page. Enter your bid amount in the box and click 'Confirm Bid'. Your bid is not complete until you click 'Confirm Bid'.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}

export default AppFaq