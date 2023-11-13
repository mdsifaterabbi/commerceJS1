
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import SingleDetails from './Pages/SingleDetails'


function App() {



  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/details' element={<ProductDetails />} />
         <Route path='/details/:id' element={<SingleDetails />} /> 
      </Routes>

    </>
  )
}

export default App
