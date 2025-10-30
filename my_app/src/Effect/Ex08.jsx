import { useState,useEffect } from "react";

export default function Ex08(){
    //현재 시간을 저장하는 상태변수 생성
    //new Date -> 오늘 날짜/현재 시간 반환
    //new Date는 코어객체이다. 키밸류로 구성, 그래서 리액트는 객체가 같으면 주소가 같다고 생각해서 렌더가 안됨.
    //  때문에 문자열로 반환할수없음
    const [num,setNum]=useState(0)
    const [num2,setNum2]=useState(0)
        const inputHandler = (e)=>{setNum(e.target.value)}
        const inputHandler2 = (e)=>{setNum2(e.target.value)}
        const res = num*num2
    useEffect(()=>{
        console.log(`${num}X${num2}=${res}`)
    },[num,num2])
   return(
    <>
        <h2>곱셉 계산기</h2>
        <span>첫 번째 숫자</span><input placeholder="숫자만 입력" onChange={inputHandler} value={num}></input>
        <span>두 번째 숫자</span><input placeholder="숫자만 입력" onChange={inputHandler2} value={num2}></input>
        <p>결과:</p>
        <p style={{color:'blue',fontSize:'20px',fontWeight:700}}>{res}</p>
        <span>콘솔을 열면 계산 과정도 확인 할 수 있습니다.</span>
    </>
   )

}
//객체는 문자화 될 수 없다.
