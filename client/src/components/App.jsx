import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.less'
import Jewellery from './Jewellery'

import Item from './Item'

import Home from './Home'

import BuyerLogin from './BuyerLoginForm'
import BuyerSignup from './BuyerSignUpForm'
import SellerLogin from './SellerLoginForm'
import SellerSignup from './SellerSignUpForm'
import NavBar from './NavBar'


function App() {

  return (
    <div>

        {/* Import start your pages below for testing */}











        {/* End import of pages  */}



    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route  path="/home" element={<Home />} />
            <Route  path="/jewellery" element={<Jewellery />} />
            <Route  path="/item" element={<Item/>} />
            <Route  path="/buyerlogin" element={<BuyerLogin />} />
            <Route  path="/buyersignup" element={<BuyerSignup />} />
            <Route  path="/sellerlogin" element={<SellerLogin />} />
            <Route  path="/sellersignup" element={<SellerSignup/>} />
        </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App