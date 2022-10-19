import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../App.css'
import Home from './Home'
import NavBar from './NavBar'


function App() {

  return (
    <div>

        {/* Import start your pages below for testing */}

      {/* <Home /> */}
      <NavBar />





        {/* End import of pages  */}

        

    {/* <BrowserRouter>
    <div>
        <Routes>
            <Route  path="/" element={<page1 />} />
            <Route  path="/" element={<page2 />} />
            <Route  path="/" element={<page3 />} />
            <Route  path="/" element={<page4/>} />
        </Routes>
        <Routes>
        <Route  path="/" element={<page1 />} />
            <Route  path="/" element={<page2 />} />
            <Route  path="/" element={<page3 />} />
            <Route  path="/" element={<page4/>} />
        </Routes>
      </div>
     </BrowserRouter> */}

    </div>
  )
}

export default App
