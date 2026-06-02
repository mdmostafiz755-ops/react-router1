import React from 'react'
import Header from '../header/Header'
import { Outlet, useNavigation } from 'react-router'
import Footer from '../Footer/Footer'
//root er moddeh j part cng hobe na oitah rakhbo
const Root = () => {
  const navigation=useNavigation();//outlet er jinis loading spinner er jonne use hoi
  const isNavigating=Boolean(navigation.location);
  return (
    <div>
        <Header></Header>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root