import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

function Login({ setSeller }) {
	const navigate = useNavigate()
	const [form, setForm] = useState({
		name: '',
		password: ''
	})

	const logOut = ()=>{
		fetch(`/api/sellerlogout`,{
			method: "DELETE"
		})
		.then(res=>{
			if(res.ok){
				toast('Logout successful')
			}else{
				toast('Something went wrong')
			}
		})
		.catch(err=>toast(err.message))
	}

	const onFinish = async (values) => {
		try {
			const resp = await fetch(`/api/sellerlogin`,{
				method: "POST",
				headers: {"Content-Type": "application/json"},
				body: JSON.stringify({name: values.username, password: values.password})
			})
			if(resp.ok){
				const jsonResp = await resp.json()
				setSeller(jsonResp)
				toast(`Success logged in as ${jsonResp.name}`)
				navigate('/')
			}else{
				const error = await resp.json()
				console.log(error)
			}
		} catch (error) {
			toast(error.message)
			
		}
	}

	const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

	return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ marginRight: '8px', fontFamily: 'Averia Serif Libre', fontSize: '22px' }}>Login as:</span>
            <Link to="/buyerlogin" style={{ marginRight: '8px', backgroundColor: '#ecc13b', color: '#2e4288', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>Buyer</Link>
            <Link to="/sellerlogin" style={{ marginRight: '8px', backgroundColor: '#ecc13b', color: '#2e4288', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>Seller</Link>
          </div>
        </div>
      </div>
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
  );
};
export default Login;