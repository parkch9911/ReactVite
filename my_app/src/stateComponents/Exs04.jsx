import React,{useState} from 'react'


export default function Exstate04(){
const [count,setCount]= useState(0) // 초기값 0
const plus = ()=>{setCount(count+1)} //+1 씩

    return(
        <>
            <div>
                <p>♥{count}</p> 
                <button onClick={plus}>좋아요</button>
            </div>
        </>
    )
}
// p의 {count}는 기본값을 가지다가 버튼의 onclick을 통해 리렌더링 된 값이 된다
// plus는 setCount => 카운트+1 씩 증가되는 함수

