import { useState,useEffect } from "react";

export default function Ex06(){
    //토글 안보이는 초기값 
    const [toggle,setToggle]=useState(false)
    //온클릭함수 (토글)
    const toggleHandler = ()=>{
        setToggle(!toggle)
    }

   return(
    <>
        <h2>LifeCylcle Demo</h2>
        <button type="button"onClick={toggleHandler}>{toggle? '컴포넌트숨기기':'컴포넌트보이기'}</button>
        {/* 조건부 렌더링 toggle이 true일 때만 자식 컴포넌트 렌더링 */}
        {toggle && <ChildEx06/>}
        <p>F12를 눌러 콘솔을 확인하세요!</p>
        <p>컴포넌트의 마운트/언마운트 메시지가 출력됩니다.</p>
    </>
   )



}

function ChildEx06(){
    //자식한테 useEffect 가지도록 구현
    useEffect(()=>{
        console.log('컴포넌트가 마운트 되었습니다.')        
        return()=>{console.log('컴포넌트가 언마운트 되었습니다.')}
    },[]) // <= []빈배열로 작성하면 마운트시 1회 언마운트시 1회
     return(
        <>
            <p>안녕하세요 저는 토글 가능한 컴포넌트입니다!</p>
        </>
    )

}