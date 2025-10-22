import React,{useState} from 'react'

export default function Exstate14(){
const [time,setTime]=useState(new Date().toLocaleTimeString()) //초기값 ''
const get =()=>{
    setTime(new Date().toLocaleTimeString())
}

    return(
        <>
        <div>
            <p>{time}</p>
            <button style={{border:'1px solid black'}} onClick={get}>갱신</button>
        </div>
        </>
    )
}
