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



function App() {

  return (
    <>
      <LoginProvider>
        <Header02/>
        <Routes>
          <Route path='/' element={<Home02/>}/>
          <Route path='/profile' element={<Profile02/>}/>
          <Route path='/login' element={<LoginForm02/>}/>
        </Routes>
      </LoginProvider>
    </>
  )
}

export default App
