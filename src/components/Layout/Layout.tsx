import { useState } from 'react'

import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'

const Layout = () => {
  const [credit, setCredit] = useState(parseInt(JSON.parse(localStorage.getItem('data'))?.credit))
  return (
    <>
    <Header credit={credit}/>
    {/* <Content /> */}
    <Footer credit={credit} setCredit={setCredit} />
    </>
  )
}

export default Layout