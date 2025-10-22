import React,{useState} from 'react'

//인풋에 onChange()함수 이용해 작성
// element.target.value => 인풋에 입력한 값을 가져올 수 있음.
// e.target.value

export default function Exstate08(){
    const [box,setBox]=useState('좋아요♥');
    const change = ()=>{setBox(box==='좋아요♥'?'싫어요ㅠㅠ':'좋아요♥')}
    return(
        <>
            <div>{box}</div>
            <button style={{border:'1px solid black'}} onClick={change}>변경</button>
        </>
    )
}
