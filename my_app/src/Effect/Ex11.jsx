import { useState,useEffect } from "react";

export default function Ex11(){
    const [inputName,setInputName]=useState('')
    const [inputAge,setInputAge]=useState(0)
    
    useEffect(()=>{
        if(inputName.trim()){console.log('이름이 변경되었습니다')}
    },[inputName])

    useEffect(()=>{
        if(inputAge>0){
        console.log('나이가 변경되었습니다')}
    },[inputAge])
    
    return(
    <>
        <input type="text"
         placeholder="이름을 입력해주세요"
         value={inputName}
         onChange={(e)=>setInputName(e.target.value)}
         ></input>
        <input type="number"
         placeholder="나이를 입력해주세요"
         value={inputAge}
         onChange={(e)=>setInputAge(e.target.value)}
         ></input>
    </>
   )
}