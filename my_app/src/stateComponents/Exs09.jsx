import React,{useState} from 'react'

//인풋에 onChange()함수 이용해 작성
// element.target.value => 인풋에 입력한 값을 가져올 수 있음.
// e.target.value

export default function Exstate09(){
    const [count,setCount]=useState(0);
    const plus = ()=>{setCount(count+1)}
    const double = count % 2 == 0 ? '짝수입니다':'홀수입니다'
    return(
        <>
            <p>{count}</p>
            <button onClick={plus}>+</button>
            <p>{double}</p>
        </>
    )
}