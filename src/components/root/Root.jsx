import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
//root er moddeh j part cng hobe na oitah rakhbo
const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root