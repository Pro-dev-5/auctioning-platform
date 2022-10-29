import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'antd'
import '../App.less'
import Home from './Home'
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
import Art from './Art'
import SellerHome from './SellerHome'
import Seller from './Seller'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import SignUp from './Signup'
import Login from './Login'
// import { Footer } from 'antd/lib/layout/layout'

function App() {
	const [seller, setSeller] = useState({})
	
	useEffect(()=>{
		fetch('/api/me')
    .then(res => res.json())
    .then(data => setSeller(data))
		// .then(res=>{
		// 	if(res.ok){
		// 	res.json()
    // .then(mes=>
    //     console.log('Welcome ', mes))
    //     setSeller()
		// 	}
		// })
		.catch(err=>toast(err.message))
	},[])
  console.log(seller)
  console.log(seller.id)

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
              <Route  path="/seller" element={<Seller seller={seller}/>} />
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

    </div>
  )
}

export default App