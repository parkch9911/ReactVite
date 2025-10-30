import { useState,useEffect } from "react";

export default function Ex04(){
    //time 상태를 변경하는 변수
    const [time,setTime]=useState(0)
    //setInterval(()=>{},밀리초) => 밀리초 마다 실행을 반복
    //setTimeOut(()=>{},밀리초) => 밀리초 뒤에 한번만 실행
    useEffect(()=>{
        const clock = setInterval(() => {
            setTime(time+1)
        }, 1000);
        // clearUp 함수 => 언마운트 될 때 삭제되는 함수
        // return 함수
        return() => clearInterval(clock)
    })
  //클리어 어디에주는거엿지===============
    return(
        <>
            <h3>⏳자동 타이머</h3>
            <p>{time}초가 경과했습니다.</p>
        </>
    )
}