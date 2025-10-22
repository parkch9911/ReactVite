import React,{useState} from 'react'


export default function Exstate05(){
const [change,setChange]= useState('') //초기값 없음
//change값이 비어있으면? 이미지 태그, 아니면 다시 비우기
const click = ()=>{setChange(change===''?<img src='./public/vite.svg'/>:'')}
    return(
        <>
            <div>
                <div>{change}</div>
                <button style={{border:'1px solid black'}} onClick={click}/>
            </div>
        </>
    )
}
