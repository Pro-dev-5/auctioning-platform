import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
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
		.catch(err=>toast(err.message))
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24}} justify='end' align='middle' style={{ width: '25%', marginRight: 'auto', marginLeft: 'auto' }}>
      <Col span={24}>
        <div style={{ padding: '32px 24px', backgroundColor: '#F5F5F5' }}>
          <Form
            layout='vertical'
            size='middle'
            name="basic"
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
            {/* <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
            >
              <Button type="" htmlType="submit" style={{ backgroundColor: '#ECC13B', color: '#fff' }}>
                Submit
              </Button>
            </Form.Item>
          </Form> */}
        </div>
      </Col>
    </Row>
  );
};
export default SellerLoginForm;