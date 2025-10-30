import { useState,useEffect, useReducer } from "react";

export default function Ex03(){
    //의존생 배열에 count 추가하여 생성
    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log('현재 카운트 :'+count)
    },[count])

    //버튼에 함수를 만들지말고 핸들러를 따로 함수 제작 후 넣어주자
    //[-]핸들러
    const minusHandler = ()=>{
        setCount(count-1)
    }
    //[+]핸들러
    const plusHandler = ()=>{
        setCount(count+1)
    }
    return(
        <>
            <h3>Counter with useEffect</h3>
            <p>{count}</p>
            <button onClick={minusHandler}>-</button>
            <button onClick={plusHandler}>+</button>
        </>
    )
}