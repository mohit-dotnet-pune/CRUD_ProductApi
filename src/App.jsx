import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import { Home } from './pages/Home';
import { AddNewProduct } from './pages/AddNewProduct';
import { ShowAllProducts } from './pages/ShowAllProducts';
import { ShowProductById } from './pages/ShowProductById';
import { UpdateProduct } from './pages/UpdateProduct';
import { DeleteProduct } from './pages/DeleteProduct';

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Home/>}>
          <Route index element={<ShowAllProducts/>}/>
          <Route path='add' element={<AddNewProduct/>}/>
          <Route path='showbyid/:id' element={<ShowProductById/>}/> 
          <Route path='updatebyid/:id' element={<UpdateProduct/>}/> 
          <Route path='deletebyid/:id' element={<DeleteProduct/>}/> 

          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
