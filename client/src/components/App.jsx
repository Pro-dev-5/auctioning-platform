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
// import { Footer } from 'antd/lib/layout/layout'


function App() {
	const url = "http://localhost:3000/api"
  return (
    <div>
		<BrowserRouter>
      <Layout className="layout"> {/* Element to revert if otherwise  */}
        <NavBar/>
        <div className='site-layout-content' style={{ position: 'absolute', top: '80%', right: '0', left: '0' }}>
          <Routes>
              <Route  path="/" element={<Home url={url}/>} />
              <Route  path="/jewellery" element={<Jewellery url={url} />} />
              <Route  path="/item" element={<Item url={url}/>} />
              <Route  path="/ceramics" element={<Ceramics url={url}/>} />
              <Route  path="/buyerlogin" element={<BuyerLogin url={url}/>} />
              <Route  path="/buyersignup" element={<BuyerSignup url={url}/>} />
              <Route  path="/sellerlogin" element={<SellerLogin url={url}/>} />
              <Route  path="/sellersignup" element={<SellerSignup url={url}/>} />
              <Route  path="/art" element={<Art url={url}/>} />
              <Route  path="/sellerhome" element={<SellerHome url={url}/>} />
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