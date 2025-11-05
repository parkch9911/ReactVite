import { useState } from 'react'
// src -> assets -> 이미지 파일은 반드시 import한다.
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import는 외부 파일을 가지고 온다. (가져오기)
import './App.css'
// React는 이미지를 하나하나 import해서 개별로 가져올 수 있다.
// public 폴더의 이미지 파일은 import하지 않아도
// 사용 가능하다.
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import Exstate18 from './stateComponents/Exs18.jsx'
// import Blog from './stateComponents/Blog.jsx'
// import Review from './stateComponents/MovieReview.jsx'
// import Shopping from './stateComponents/ShoppingList.jsx'
// import CommentBoard from './stateComponents/CommentBoard.jsx'
// import ModalChange from './stateUI/UItest01.jsx'
// import LoginView from './stateUI/UItest02.jsx'
// import PromptChange from './stateUI/UItest03.jsx'
// import Parent from './stateUI/UItest04.jsx'
// import AuthApp from './stateUI/member/AuthApp.jsx'
// import MovieApp from './stateUI/movie/MovieApp.jsx'
import FoodApp from './stateUI/food/FoodApp.jsx'
import TableApp from './stateUI/tableOrder/TableApp.jsx'
import Eff07 from './Effect/eff07.jsx'
import ExJ05 from './JSON/ExJ05.jsx'
import ExJ07 from './JSON/ExJ07.jsx'
import ExJ07detail from './JSON/ExJ07detail.jsx'
import useProduct from './JSON/data.jsx' 
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import ProdApp from './pages/prodapp.jsx'
import ProdDetail from './pages/proddetail.jsx'
import ExJ07datail from './JSON/ExJ07detail.jsx'
import useRecipes from './pages/Recipes/RecipesData.jsx'
import RecipesList from './pages/Recipes/RecipesList.jsx'
import RecipesDetail from './pages/Recipes/RecipesDetail.jsx'



//UserCard()함수 생성하기
//UserCard()컴포넌트를 App()컴포넌트의 자식으로 사용할 예정
//App()컴포넌트의 name,age매개변수를 => props명령어를 이용해
//컴포넌트와 컴포넌트 사이의 데이터 이동이 가능하다.
//부모 -> 자식만 매개변수 보낼 수 있다.
//props는 부모의 모든 매개변수를 대변한다.
//{props.name},{props.age}
// props로 매개변수를 보내지 않고 직접 매개변수 값을 지정
//{name,age}형식으로 작성한다.
// function UserCard({name,age}){
//   return(
//     <>
//       <div style={{border:'1px solid #ddd',
//                   padding:'15px',
//                   margin:'15px',
//                   borderRadius:'8px'
//       }}>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//       </div>
//     </>
//   )
// }

// function app (){} => react 에서 App()는 컴포넌트라 부른다.
function App() {
//React는 반드시 return() 안에서
// 실행할 HTML 문서를 작성한다.
// true와 false는 논리값이다. 문자가 아님.
// true === 1, false === 0
  // const name = '홍길동';
  // const isLoggin = true;
  // const fruits = ['사과','오렌지','바나나'];
  // const user = {name:'김철수', age:25, email:'kim@naver.com'}
  // const btnClick = ()=>{
  //             console.log('버튼클릭')
  //             }
  // const products = [{id:1, name:'노트북',price:1200000},
  //                   {id:2, name:'마우스',price:30000},
  //                   {id:3, name:'키보드',price:80000}
  // ]
  // 위에서 name => key
  //       김철수 => value


  //내가 만든 커스텀 훅 호출
  const data= useRecipes();

  return (
    // <></>는 프래그먼트로 React는 HTML 작성 시
    // 반드시 부모태그가 하나만 존재해야 하므로
    // 비어있는 태그를 사용하도록 허용한 기술이다.
    // React는 반드시 닫는 태그 존재해야 함 : <hr />

    <>
      {/* 문제 : name : '홍길동' 정의 후 <h1>태그에 출력하기 */}
      {/* <div style={{backgroundColor:'lightsteelblue',
                  padding:'20px',
                  borderRadius:'15px'
                  }}> */}
        {/* JavaScript 의 class를 React는 className으로 사용 */}
        {/* React에서 변수의 값을 시용하려면 반드시 {변수 이름 입력} */}
        {/* <h1>{name}</h1> */}
        {/* <h2>{isLoggin==true? '환영합니다':'로그인 하세요'}</h2> */}
        {/* <img src={reactLogo} alt='샘플 랜덤 이미지'/> */}
        {/* <ul> */}
          {/* map()함수 이용 */}
          {/* {fruits.map((item,index)=>())} : 형식으로 사용 */}
          {/* {fruits.map((item,index)=>(
            <li key={index}>{item}</li>
          ))} */}
        {/* </ul>
        <ul> */}
          {/* <h1>{`이름 : ${user.name}`}</h1>
          <h2>{`나이 : ${user.age}살`}</h2>
          <h1>{`이메일 : ${user.email}`}</h1> */}
        {/* </ul> */}
        {/* <p>스타일 적용된 박스</p> */}
        {/* 클릭 함수 생성
        const aaa = ()=>{
        console.log('버튼클릭')} */}

        {/* <button onClick={btnClick}>버튼</button>
      </div> */}
      {/* UserCard안에 name과 age는 매개변수이다. */}
      {/* <UserCard name='홍길동' age={20}/>
      <UserCard name='김성중' age={43}/>
      <UserCard name='아무개' age={25}/> */}
        {/* {products.map((item,i)=>(
          <div style={{backgroundColor:'blue',
                      margin:'15px',
                      padding:'13px',
                      color:'white',
                      borderRadius:'10px',
                      border:'8px solid darkblue'
          }}
                key={item.id}>
                  <p style={{fontWeight:'600'}}>{`상품명 : ${item.name}`}</p>
                  <p>{`가격 : ${item.price.toLocaleString()}원`}</p>
          </div>
        ))} */}

        {/* 문제2 */}
        {/* <UserCard02 name='개나리' age={20} city='부산'/>
        <UserCard02 name='진달래' age={25} city='인천'/>
        <UserCard02 name='김성중' age={43} city='서울'/> */}

        {/* 문제3 */}
        {/* <Product name ='노트북' price={120000}/>
        <Product name ='마우스' price={15000}/> */}

        {/* 문제6 */}
        {/* <Alert type='error' msg='오류'/>
        <Alert type='success' msg='성공'/>
        <Alert type='info' msg='알림'/>
        <Alert type='warn' msg='경고'/> */}
        {/* <ExJ07/> */}
        {/* 커스텀훅이든 이미 존재하는 훅이든 JSX안으로 가져올 수 없다. */}
          {/* <Routes>
            <Route path='/' element={<RecipesList data={data}/>}/>
            <Route path='/detail/:id' element={<RecipesDetail data={data}/>}/>
          </Routes> */}
          <TableApp/>
    </>
  )
}

// export 는 App컴포넌트를 밖으로 가지고 나간다. (내보내기)
export default App

