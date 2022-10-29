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
import Login from './Login';
import SignUp from './Signup';
import Ceramics from './Ceramics'
import SellerHome from './SellerHome'
import Seller from './Seller'
import '../styles/App.css';
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
    // const url = "http://localhost:3000/api"
    const [seller, setSeller] = useState({})

    useEffect(()=>{
        // fetch(`${url}/seller`)
        fetch('/api/me')
        // .then(res=>{
        //         if(res.ok){
        //             res.json().then(console.log)
        //         }
        //     })
        .then(res=>{
			if(res.ok){
			res.json().then(mes=>console.log('Welcome ', mes))
			}
		})
        .catch(err=>toast(err.message))
    },[])

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
    );
}

export default App