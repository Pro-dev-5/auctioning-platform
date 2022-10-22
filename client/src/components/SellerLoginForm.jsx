import { Button, Checkbox, Form, Input } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const SellerLoginForm = ({ url }) => {
	const navigate = useNavigate()
  const onFinish = (values) => {
    fetch(`${url}/sellerlogin`,{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({name: values.username, password: values.password})
		})
		.then(res=>{
			if(res.ok){
				toast(`Success logged in as ${values.username}`)
				navigate('/')
			}else{
				res.json().then(err=>toast(err.errors[0]))
			}
		})
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
			<ToastContainer/>
    </Form>
  );
};
export default SellerLoginForm;