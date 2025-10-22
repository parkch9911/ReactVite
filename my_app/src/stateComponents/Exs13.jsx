import React,{useState} from 'react'

export default function Exstate13(){
const [text,setText]=useState('') //초기값 ''

//리셋 버튼 누르면
const reset =()=>{
    setText('')
}

    return(
        <>
        <div>
            <input onChange={(e)=>{setText(e.target.value)}} value={text}></input>
            <button style={{border:'1px solid'}} onClick={reset}>초기화</button>
            <p>{text}</p>
        </div>
        </>
    )
}
