import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Layout } from 'antd';
import AppHeader from './common/Header';
import AppHome from './views/Home';
import AppFooter from './common/Footer';
import Art from './Art';
import Item from './Item'
import Jewellery from './Jewellery'
// import BuyerLogin from './BuyerLoginForm'
// import BuyerSignup from './BuyerSignUpForm'
// import SellerLogin from './SellerLoginForm'
// import SellerSignup from './SellerSignUpForm'
import NavBar from './NavBar'
import Footer from './Footer'
import '../styles/Nav.css'
import Ceramics from './Ceramics'
import SellerHome from './SellerHome'
import Seller from './Seller'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import SignUp from './Signup'
import Login from './Login'
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
              <Route  path="/" element={<Home />} />
              <Route  path="/jewellery" element={<Jewellery  />} />
              <Route  path="/item/:id" element={<Item />} />
              <Route  path="/ceramics" element={<Ceramics />} />
              <Route  path="/seller" element={<Seller  seller={seller}/>} />
              <Route  path="/login" element={<Login setSeller={setSeller}/>} />
              <Route  path="/signup" element={<SignUp setSeller={setSeller}/>} />
              {/* <Route  path="/sellerlogin" element={<SellerLogin  setSeller={setSeller}/>}/> */}
              {/* <Route  path="/sellersignup" element={<SellerSignup  setSeller={setSeller}/>} /> */}
              <Route  path="/art" element={<Art />} />
              <Route  path="/sellerhome" element={<SellerHome />} />
          </Routes>
          <div style={{ marginTop: '100px' }}>

            <Footer/>
            <ToastContainer/>
          </div>
        </div>
      </Layout>
    </BrowserRouter>

    return (
        <BrowserRouter>
            <Layout className='mainLayout'>
                <Header>
                    <AppHeader />
                </Header>
                <Content>
                    <Routes>
                        {/* <Route path="/" element={<AppHome url={url}/>}></Route>
                        <Route  path="/jewellery" element={<Jewellery url={url} />} />
                        <Route  path="/item/:id" element={<Item url={url}/>} />
                        <Route  path="/ceramics" element={<Ceramics url={url}/>} />
                        <Route  path="/seller" element={<Seller url={url} seller={seller}/>} />
                        <Route  path="/buyerlogin" element={<BuyerLogin url={url}/>} />
                        <Route  path="/buyersignup" element={<BuyerSignup url={url}/>} />
                        <Route  path="/sellerlogin" element={<SellerLogin url={url} setSeller={setSeller}/>}/>
                        <Route  path="/sellersignup" element={<SellerSignup url={url} setSeller={setSeller}/>} />
                        <Route  path="/art" element={<Art url={url}/>} />
                        <Route  path="/sellerhome" element={<SellerHome url={url}/>} /> */}
                        <Route  path="/" element={<AppHome />} />
                        <Route  path="/jewellery" element={<Jewellery  />} />
                        <Route  path="/item/:id" element={<Item />} />
                        <Route  path="/ceramics" element={<Ceramics />} />
                        <Route  path="/seller" element={<Seller seller={seller}/>} />
                        <Route  path="/login" element={<Login setSeller={setSeller}/>} />
                        <Route  path="/signup" element={<SignUp setSeller={setSeller}/>} />
                        {/* <Route  path="/sellerlogin" element={<SellerLogin  setSeller={setSeller}/>}/> */}
                        {/* <Route  path="/sellersignup" element={<SellerSignup  setSeller={setSeller}/>} /> */}
                        <Route  path="/art" element={<Art />} />
                        <Route  path="/sellerhome" element={<SellerHome />} />
                    </Routes>
                </Content>
                <Footer>
                    <AppFooter />
                </Footer>
                <ToastContainer/>
            </Layout>
        </BrowserRouter>
        </div>
    );
}

export default App