import { useState,useEffect } from "react";

export default function Ex07(){
    //현재 시간을 저장하는 상태변수 생성
    //new Date -> 오늘 날짜/현재 시간 반환
    //new Date는 코어객체이다. 키밸류로 구성, 그래서 리액트는 객체가 같으면 주소가 같다고 생각해서 렌더가 안됨.
    //  때문에 문자열로 반환할수없음
    const [time,setTime]=useState(new Date())

    //컴포넌트가 화면에 나타날 때 마다 , 시간 업데이트
    useEffect(()=>{
        //1초마다 실행되는 함수 
        const timer = setInterval(() => {
            // 얕은 복사햇으니까 다른아이니까 렌더해줘 
            const now = new Date();
            setTime(now) // 상태를 업데이트하면 화면도 같이 바뀌게
        }, 1000);
       
            //클리어
            return()=> clearInterval(timer)
        },[])

        //시:분:초 => 두자리수로 표현
        //10 이하의 모든 숫자에 0을 붙인다.
        const two = (num)=>(num<10? '0'+num:num)

        //시분초 추출
        const hr = two(time.getHours()) //시
        const min = two(time.getMinutes()) //분
        const sec = two(time.getSeconds()) //초



   return(
    <>
       <h3>DIGITAL CLOCK</h3>
       {/* 시,분,초 00:00:00 */}
       <h2>{hr}:{min}:{sec}</h2>
       {/*날짜 :  2025년 10월 30일 목요일 */}
       {/* toLocaleString 현재 지금 지역의 날짜를 영문법으로 출력 */}
       <p>{time.toLocaleDateString()}</p>
       
    </>
   )

}
//객체는 문자화 될 수 없다.
