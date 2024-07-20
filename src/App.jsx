import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Sale from './components/Sale'
import AddProduct from './components/AddProduct'
import CreateProduct from './components/createProduct'
import Backet from './components/Backet'
import BacketProduct from './components/BacketProduct'
import Category from './components/Category'
import Products from './components/Products'
import Search from './components/Search'
import { useSelector } from 'react-redux'
import ProductDetails from './components/ProductDetails'

function App() {
  const {dark} = useSelector((s) => s.main)
  return (
    <div
    style={{
      background: dark ? "white" : "black",
      color: dark ? "black" : "white",
      minHeight: "100vh"
    }}
    >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/product' element={<AddProduct/>}/>
        <Route path='/productCard' element={<Products/>}/>
        <Route path='/productDet/:detId' element={<ProductDetails/>}/>
        <Route path='/createProduct' element={<CreateProduct/>}/>
        <Route path='/sale' element={<Sale/>}/>
        <Route path='/backet' element={<Backet/>}/>
        <Route path='/backetProduct' element={<BacketProduct/>}/>
        <Route path='category/:title' element={<Category/>}/>
        <Route path='search' element={<Search/>}/>
      </Routes>
    </div>
  )
}

export default App
