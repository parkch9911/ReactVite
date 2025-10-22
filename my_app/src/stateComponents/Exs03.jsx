import React,{useState} from 'react'


export default function Exstate03(){
const [toggle,setToggle]= useState('red') // 초기값 빨강
const change = ()=>{setToggle(toggle==='red'?'blue':'red')}

    return(
        <>
            <div style={{backgroundColor:toggle}}>
                <button onClick={change}/>
            </div>
        </>
    )
}
// toggle의 초기값 'red'
// 박스의 색은 toggle. 즉 style backgroundcolor:toggle

