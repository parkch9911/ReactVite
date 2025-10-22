import React,{useState} from 'react'

export default function Exstate01(){
const [toggle,setToggle]= useState('안녕하세요') // 초기값 안녕하세요
    return(
        <>
            <div>
                <p>{toggle}</p>
                <button onClick={()=>{
                setToggle(toggle==='안녕하세요'?'Hello':'안녕하세요')
                }}>변경</button>
            </div>
        </>
    )
}
