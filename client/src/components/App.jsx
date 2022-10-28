import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './Home'
import Login from './Login'
// import Signup from './Signup'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect } from 'react'

function App() {
	const [seller, setSeller] = useState({})
	const url = "http://localhost:3000/api"
	useEffect(()=>{
		fetch('/api/me')
		.then(res=>res.json())
		.then(data=>console.log(data))
		.catch(err=>toast(err.message))
	},[])
  return (
    <div>
      <BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>}/>
					<Route path='/login' element={<Login url={url} setSeller={setSeller}/>}/>
					{/* <Route path='/signup' element={<Signup url={url} setSeller={setSeller}/>}/> */}
					{/* <Route path='/signup' element={<Home/>}/> */}
				</Routes>
				<ToastContainer/>
			</BrowserRouter>
    </div>
  )
}

export default App
