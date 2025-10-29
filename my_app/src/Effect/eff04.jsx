import { useState,useEffect } from "react";

export default function Eff04(){
    //time의 용도  => 시간 누적 setTime(time + 1)
    const [time,setTime]=useState(0)

    //여기서 의존성 배열을 사용하지 않은 이유는
    // 초는 계속 렌더링되면서 변경해야하기때문에
        useEffect(()=>{
           const timer = setInterval(()=>setTime(time+1),1000)
           //clearUp 함수 필요
           return() => clearInterval(timer)
        })
    return(
        <div>
            <p>{time}초 경과</p>
        </div>
    )
}