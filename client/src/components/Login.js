import React, { useState } from 'react'

function Login({ url }) {
	const [form, setForm] = useState({
		name: '',
		password: ''
	})

	const handleChange = (e) =>{
		setForm({...form, [e.target.name]: e.target.value})
	}

	const login = (e) =>{
		e.preventDefault()
		fetch(`/api/login`,{
			method: "POST", headers: {"Content-Type": "application/json"},
			body: JSON.stringify(form)
		})
		.then(res=>res.json())
		.then(data=> alert(data))
		.catch(err=>alert(err.message))
	}
	return (
		<form onSubmit={login}>
			<input type='text' name='name' value={form.name} onChange={handleChange}/>
			<label>Username</label><br/>

			<input type='password' name='password' value={form.password} onChange={handleChange}/>
			<label>Password</label><br/>

			<input type='submit'/>
		</form>
	)
}

export default Login