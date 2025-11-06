import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserApp from './UserApp'
import ThemeLayout from './ContextAPI/pages/ThemeLayout'
// ThemeProvider 를 import하여 안에
// ThemeContext.Provider가 감싸는 형식을 구현한다
import ThemeProvider from './ContextAPI/ThemeContext'

import {Routes,Route } from 'react-router-dom'
import Home02 from './Context02/pages02/Home02'
import LoginForm02 from './Context02/component02/LoginForm02'
import Profile02 from './Context02/component02/Profile02'
import Header02 from './Context02/component02/Header02'
import LoginProvider from './Context02/AuthContext'
import WishlistProvider from './wishlist/WishListContext'
import ProductList from './wishlist/ProductList'
import WishListPage from './wishlist/WishlistPage'
import WishListHeader from './wishlist/WishlistHeader'



function App() {

  return (
    <>
      <WishlistProvider>
        <WishListHeader/>
        <Routes>
          <Route path='/' element={<ProductList/>}/>
          <Route path='/wishlist' element={<WishListPage/>}/>
        </Routes>
      </WishlistProvider>
    </>
  )
}

export default App
