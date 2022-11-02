import {Button,Checkbox,Form,Input, Col, Row, Switch} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
// import '../styles/Nav.css'
import { toast, ToastContainer } from 'react-toastify';

  const SignUp = ({ setSeller }) => {
    const [form] = Form.useForm();
		const [status, setStatus] = useState(false)

    const onFinish = (values) => {
      fetch(`/api/signup`,{
				method: "POST", headers: {"Content-Type": "application/json"},
				body: JSON.stringify({
					name: values.username,
					password: values.password,
					is_seller: status,
					email: values.email
				})
			})
			.then(res=>{
				if(res.ok){
					res.json().then(data=>{
						setSeller(data)
						toast(`Logged in as ${data.name}`)
					})
				}else{
					toast("Something went wrong")
				}
			})
			.catch(err=>toast(err.message))
    };

    return (

      // Adding col and row to control the elements. Here the Row will serve as a root element
    <div className='container-fluid'>
        <div className="block aboutBlock">
            <div className="titleHolder" style={{ marginTop: '80px' }}>
                Seller SignUp Form
            </div>
            <Row gutter={{ xs: 8, sm: 16, md: 24}} justify='space-evenly' align='middle' style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
                <Col span={6}>
                <div>
                    <img src="/images/signup.svg" alt="" style={{ width: '500px' }} />
                </div>
                </Col>
                <Col span={6}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                        <span style={{ marginRight: '8px', fontFamily: 'Averia Serif Libre', fontSize: '22px' }}>Register as:</span>
                        {/* <Link to="/buyersignup" style={{ marginRight: '8px', backgroundColor: '#ecc13b', color: '#2e4288', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>Buyer</Link>
                        <Link to="/sellersignup" style={{ marginRight: '8px', backgroundColor: '#ecc13b', color: '#2e4288', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>Seller</Link> */}
                    </div>
                    </div>
                </div>
                <div style={{ padding: '32px 24px', backgroundColor: '#F5F5F5' }}>
                    <Form
                    // {...formItemLayout}
                    layout='vertical'
                    size='middle'
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    
                    scrollToFirstError
                    >
                    <Form.Item
                        name="username"
                        label="Username"
                        tooltip="What do you want others to call you?"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                            whitespace: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>

										<label>Are you a <strong>buyer</strong> or a <strong>seller</strong>?</label>
										<select onChange={(e)=>setStatus(e.target.value)} value={status}>
											<option>SELECT--</option>
											<option value={false}>Buyer</option>
											<option value={true}>Seller</option>
										</select>
                    
                    <Form.Item
                        name="email"
                        label="E-mail"
                        rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>
                
                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                
                    
                
                    <Form.Item>
                        <div style={{ color: '#b8b8b8' }}>
                        Already have an account? <a href="/login" style={{ textDecoration: 'underline', color: '#f3c180' }}>Login</a>
                        </div>
                    </Form.Item>
                    <Form.Item >
                        <Button type="" htmlType="submit" style={{ backgroundColor: '#f3c180', color: '#fff' }}>
                        Register
                        </Button>
                    </Form.Item>
                    </Form>
                    <ToastContainer/>
                </div>
                </Col>
            </Row>
        </div>
    </div>
);
};
export default SignUp;