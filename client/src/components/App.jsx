import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Layout } from 'antd';
import AppHeader from './common/Header';
import AppHome from './views/Home';
import AppFooter from './common/Footer';
import Art from './Art';
import Item from './Item'
import Jewellery from './Jewellery'
import AddItem from './AddItem'
import Mpesa from './mpesa';
import BidsDataDisplay from './BidsDataDisplay';
// import BuyerLogin from './BuyerLoginForm'
// import BuyerSignup from './BuyerSignUpForm'
// import SellerLogin from './SellerLoginForm'
// import SellerSignup from './SellerSignUpForm'
import Login from './Login';
import SignUp from './Signup';
import Ceramics from './Ceramics'
import SellerHome from './SellerHome'
import '../styles/App.css';
import 'antd/dist/antd.css';
import { ToastContainer } from 'react-toastify';

const { Header, Content, Footer } = Layout;

function App() {
<<<<<<< HEAD
  // const url = "http://localhost:3000/api"
  const [seller, setSeller] = useState({});
=======
   //const url = "http://localhost:3000/api"
    const [seller, setSeller] = useState({})
>>>>>>> 23f76472b5aad50638f0b5fb23ffd34f12a2ddb9

    useEffect(()=>{
      fetch('/api/me')
      .then(r => r.json())
      .then(data => setSeller(data)) 
    },[])

    return (
        <BrowserRouter>
            <Layout className='mainLayout'>
                <Header>
                    <AppHeader />
                </Header>
                <Content>
                    <Routes>
                        <Route  path="/" element={<AppHome />} />
                        <Route  path="/jewellery" element={<Jewellery  />} />
                        <Route  path="/item/:id" element={<Item seller={seller}/>} />
                        <Route  path="/ceramics" element={<Ceramics />} />
                        <Route  path="/mpesa" element={<Mpesa />} />
                        <Route  path="/add-item" element={<AddItem seller={seller}/>} />
                        <Route  path="/login" element={<Login setSeller={setSeller}/>} />
                        <Route  path="/signup" element={<SignUp setSeller={setSeller}/>} />
                        <Route  path="/art" element={<Art />} />
                        
                        <Route  path="/sellerhome" element={<SellerHome />} />
                        <Route  path="/bidsdatadisplay" element={<BidsDataDisplay />} />
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