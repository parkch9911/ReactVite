import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter , Routes, Route } from 'react-router-dom'

import Header from './common/Header/Header'
import Footer from './common/Footer/Footer'
import useMeals from './api/MealsData.jsx'
import MealsDetail from './pages/Meals/MealsDetail'
import MealsAll from './pages/Meals/MealsAll.jsx'
import MealsBest from './pages/Meals/MealsBest.jsx'
import MealsFast from './pages/Meals/MealsFast.jsx'
import MealsNew from './pages/Meals/MealsNew.jsx'
import MealsRate from './pages/Meals/MealsRate.jsx'
import Home from './pages/Home/Home'


function App() {
  //호출 커스텀 훅
const data = useMeals();
  return (
    <>
    <BrowserRouter>
      <Header/>
        <Routes>
          {/* 메인 홈 페이지나, 상품목록이나, 디테일이나 전부 json데이터필요해서 다 보내줌*/}
          <Route path='/' element={<Home data={data} />}/>
          <Route path='/all' element={<MealsAll data={data} />}/>
          <Route path='/new' element={<MealsNew data={data} />}/>
          <Route path='/best' element={<MealsBest data={data} />}/>
          <Route path='/fast' element={<MealsFast data={data} />}/>
          <Route path='/rate' element={<MealsRate data={data} />}/>
          <Route path='/detail/:id' element={<MealsDetail data={data} />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
