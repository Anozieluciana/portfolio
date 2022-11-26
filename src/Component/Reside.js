import React from 'react'
import Page1 from '../Component/Page1Comp/Page1'
import Header from '../Component/Header/Header'
import About from '../Component/AboutCom/About'
import Featured from './FeaturedComp/Featured'
import Let from '../Component/LetComp/;Let'
import Ratings from '../Component/Rate/Ratings'
import About3 from './About2/About3'



function Reside() {
  return (
    <div>
        {/* <Header/> */}
        <Page1/>
        <About/>
        <Ratings/>
        <About3/>
        <Featured/>
        <Let/>

    </div>
  )
}

export default Reside