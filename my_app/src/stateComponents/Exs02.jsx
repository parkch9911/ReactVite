import React,{useState} from 'react'


//인풋에 onChange()함수 이용해 작성
// element.target.value => 인풋에 입력한 값을 가져올 수 있음.
// e.target.value

export default function Exstate02(){
const [text,setText]= useState('')
//업데이트는 setText안에 (연산)
    return(
        <>
            <div>
               <input onChange={(e)=>{setText(e.target.value)}}></input>
               <p>입력:{text}</p>
            </div>
        </>
    )
}
