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
	const [seller, setSeller] = useState({})
	// const url = "http://localhost:3000/api"
	useEffect(()=>{
		fetch('/api/me')
		.then(res=>{
			if(res.ok){
			res.json().then(mes=>console.log('Welcome ', mes))
			}
		})
		.catch(err=>toast(err.message))
	},[])

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
              <Route  path="/sellerlogin" element={<SellerLogin url={url} setSeller={setSeller}/>}/>
              <Route  path="/sellersignup" element={<SellerSignup url={url} setSeller={setSeller}/>} />
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