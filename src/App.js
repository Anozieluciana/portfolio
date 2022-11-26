import React from 'react'
import Reside from "./Component/Reside"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import About from "./Component/AboutCom/About"
import Featured from './Component/FeaturedComp/Featured'
import Header from './Component/Header/Header'
import About2 from './Component/About2/About2'
import Foter from './Component/Foter/Foter'
// import Service from './Component/About2/About3'


function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Reside/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/feature' element={<Featured/>}/>
    <Route path='/about2' element={<About2/>}/>
    {/* <Route path='service' element={<Service/>}/> */}
    </Routes>
    <Foter/>
  </BrowserRouter>
  )
}

export default App