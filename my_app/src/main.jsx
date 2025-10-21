import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//내가만든 Test12함수 가져오기
import Test12 from './components/test12.jsx'
import Test13 from './components/test13.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Test12/> */}
    {/* <Test13/> */}
  </StrictMode>,
)
