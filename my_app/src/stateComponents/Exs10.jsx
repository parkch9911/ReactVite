import React,{useState} from 'react'

//if문과 연산자 둘 다 써보기
export default function Exstate10(){
    const [count,setCount]=useState(0);
    const plus = ()=>{
        if(count == 10){alert('최대치입니다')
        }else setCount(count+1)
    }
    const minus = ()=>{
    count==0?  alert('그만') : setCount(count-1)}
    return(
        <>
            <button onClick={minus}>-</button>
            <span style={{margin:'10px'}}>{count}</span>
            <button onClick={plus}>+</button>
        </>
    )
}
//함수안에는 if문 사용 가능함