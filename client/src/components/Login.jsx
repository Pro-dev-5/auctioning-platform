import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Login({ setSeller, setSwitchDisp }) {
	const navigate = useNavigate()
	const [form, setForm] = useState({
		name: '',
		password: ''
	})

	const onFinish = async (values) => {
		try {
			const resp = await fetch(`/api/login`,{
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({name: values.username, password: values.password})
			})
			if(resp.ok){
				const jsonResp = await resp.json()
				setSeller(jsonResp)
				toast(`Success logged in as ${jsonResp.name}`)
				navigate('/')
				setSwitchDisp(true)
				
			}else{
				const error = await resp.json()
				toast(error.errors[0])
			}
		} catch (error) {
			toast(error.message)
			
		}
	}

	const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

	return (
    <div className='loginImage'>
      <div className='container-fluid' style={{ height: '85vh' }}>
        <div className='block aboutBlock'>
          <div className="titleHolder" style={{ marginTop: '80px' }}>
              Login Form
          </div>
          <div className='loginWrapper'>
            <Row gutter={{ xs: 8, sm: 16, md: 24}} justify='end' align='middle'>
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

                    <Form.Item
                    >
                      <Button type="" htmlType="submit" style={{ backgroundColor: '#ECC13B', color: '#fff' }}>
                        Submit
                      </Button>
                    </Form.Item>
                    <ToastContainer/>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;