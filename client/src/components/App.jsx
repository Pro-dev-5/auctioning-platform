import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import '../App.less'
import Home from './Home'
import Item from './Item'
import Jewellery from './Jewellery'
import BuyerLogin from './BuyerLoginForm'
import BuyerSignup from './BuyerSignUpForm'
import SellerLogin from './SellerLoginForm'
import SellerSignup from './SellerSignUpForm'
import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/Nav.css'
import Ceramics from './Ceramics'
import Art from './Art'
import SellerHome from './SellerHome'
import Seller from './Seller'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
// import { Footer } from 'antd/lib/layout/layout'


function App() {
	const url = "http://localhost:3000/api"
  const [seller, setSeller] = useState({})

  useEffect(()=>{
    fetch(`${url}/seller`)
    .then(res=>res.json().then(setSeller))
    .catch(err=>toast(err.message))
  },[])

  const logInSeller = (values) =>{
    fetch(`${url}/sellerlogin`,{
			method: "POST",
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({name: values.username, password: values.password})
		})
		.then(res=>{
			if(res.ok){
				toast(`Success logged in as ${values.username}`)
        res.json().then(setSeller)
				navigate('/')
			}else{
				res.json().then(err=>toast(err.errors[0]))
			}
		})
		.catch(err=>toast(err.message))
  }

  return (
    <div>
		<BrowserRouter>
      <Layout className="layout"> {/* Element to revert if otherwise  */}
        <NavBar/>
        <div className='site-layout-content' style={{ position: 'absolute', top: '80%', right: '0', left: '0' }}>
          <Routes>
              <Route  path="/" element={<Home url={url}/>} />
              <Route  path="/jewellery" element={<Jewellery url={url} />} />
              <Route  path="/item/:id" element={<Item url={url}/>} />
              <Route  path="/ceramics" element={<Ceramics url={url}/>} />
              <Route  path="/seller" element={<Seller url={url} seller={seller}/>} />
              <Route  path="/buyerlogin" element={<BuyerLogin url={url}/>} />
              <Route  path="/buyersignup" element={<BuyerSignup url={url}/>} />
              <Route  path="/sellerlogin" element={<SellerLogin url={url} logInSeller={logInSeller}/>}/>
              <Route  path="/sellersignup" element={<SellerSignup url={url}/>} />
              <Route  path="/art" element={<Art url={url}/>} />
              <Route  path="/sellerhome" element={<SellerHome url={url}/>} />
          </Routes>
          <div style={{ marginTop: '100px' }}>

            <Footer/>
            <ToastContainer/>
          </div>
        </div>
      </Layout>
    </BrowserRouter>

    </div>
  )
}

export default App