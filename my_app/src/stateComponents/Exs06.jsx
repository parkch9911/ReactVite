import React,{useState} from 'react'


export default function Exstate06(){
const [text,setText]= useState(16) //초기값 
const makeBig =()=>{setText(text+3)}
    return(
        <>
            <div>
                <div style={{fontSize:text}}>글자크게</div>
                <button style={{border:'1px solid black'}} onClick={makeBig}>크게</button>
            </div>
        </>
    )
}
