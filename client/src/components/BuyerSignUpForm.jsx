import {Button,Checkbox,Form,Input, Col, Row, Switch} from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import React from 'react';
import '../styles/Nav.css'

  const BuyerSignUpForm = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

    return (

      // Adding col and row to control the elements. Here the Row will serve as a root element
      <div>
        <div style={{ position: 'relative', marginBottom: '20px' }}>
            <h1 style={{ paddingBottom: '20px' }}>Buyer SignUp Form</h1>
            {/* Underline */}
            <div style={{ height: '4px', backgroundColor: '#ECC13B', width: '80px', position: 'absolute', top: '40px', left: '60px'}} />
        </div>
        <Row gutter={{ xs: 8, sm: 16, md: 24}} justify='space-evenly' align='middle' style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }}>
          <Col span={6}>
            <div>
              <img src="../../public/images/signup.svg" alt="" style={{ width: '500px' }} />
            </div>
          </Col>
          <Col span={6}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ marginRight: '8px', fontFamily: 'Averia Serif Libre', fontSize: '22px' }}>Register as:</span>
                  <Link to="/buyersignup" style={{ marginRight: '8px', backgroundColor: '#ecc13b', color: '#2e4288', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>Buyer</Link>
                  <Link to="/sellersignup" style={{ marginRight: '8px', backgroundColor: '#ecc13b', color: '#2e4288', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>Seller</Link>
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
                    Already have an account? <a href="/sellerlogin" style={{ textDecoration: 'underline' }}>Login</a>
                  </div>
                </Form.Item>
                <Form.Item >
                  <Button type="" htmlType="submit" style={{ backgroundColor: '#ECC13B', color: '#fff' }}>
                    Register
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
      </Row>
      </div>
    );
  };
  export default BuyerSignUpForm;