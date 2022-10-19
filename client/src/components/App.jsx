import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import Jewellery from './Jewellery'

import Item from './Item'

import Home from './Home'
import Navbar from './NavBar'

import Item from './Item'

import BuyerLogin from './BuyerLoginForm'
import BuyerSignup from './BuyerSignUpForm'
import SellerLogin from './SellerLoginForm'
import SellerSignup from './SellerSignUpForm'


function App() {

  return (
    <div>

        {/* Import start your pages below for testing */}











        {/* End import of pages  */}



    <BrowserRouter>
     <div>
        <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/navbar" element={<Navbar />} />
            <Route  path="/jewellery" element={<Jewellery />} />
            <Route  path="/item" element={<Item/>} />
            <Route  path="/buyerlogin" element={<BuyerLogin />} />
            <Route  path="/buyersignup" element={<BuyerSignup />} />
            <Route  path="/sellerlogin" element={<SellerLogin />} />
            <Route  path="/sellersignup" element={<SellerSignup/>} />
        </Routes>
      </div>
     </BrowserRouter>

    </div>
  )
}

export default App