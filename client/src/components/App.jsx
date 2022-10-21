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
// import { Footer } from 'antd/lib/layout/layout'


function App() {

  return (
    <div>

        {/* Import start your pages below for testing */}











        {/* End import of pages  */}



    <BrowserRouter>
      <Layout className="layout"> {/* Element to revert if otherwise  */}
        <NavBar/>
        <div className='site-layout-content' style={{ position: 'absolute', top: '80%', right: '0', left: '0' }}>
          <Routes>
              <Route  path="/" element={<Home />} />
              <Route  path="/jewellery" element={<Jewellery />} />
              <Route  path="/item" element={<Item/>} />
              <Route  path="/buyerlogin" element={<BuyerLogin />} />
              <Route  path="/buyersignup" element={<BuyerSignup />} />
              <Route  path="/sellerlogin" element={<SellerLogin />} />
              <Route  path="/sellersignup" element={<SellerSignup/>} />
          </Routes>
          <div style={{ marginTop: '100px' }}>

            <Footer/>
          </div>
        </div>
      </Layout>
    </BrowserRouter>

    </div>
  )
}

export default App