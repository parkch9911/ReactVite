import { useState,useEffect } from "react";

export default function Ex06(){
    //time 상태를 변경하는 변수
    const [text,setText]=useState('')
    const inputHandler =(e)=>{
        setText(e.target.value)}
    useEffect(()=>{
        if(text.trim() !== ''){
            document.title = text
        }else{
            document.title = '제목을 입력하세요'
        }
    },[text])
    
    return(
        <>
            <h3>​​Dynamic Title Generator​​</h3>
            <input onChange={inputHandler} value={text}></input>
            <p>입력한 내용이 실시간으로 브라우저 탭 제목에 반영됩니다!</p>
        </>
    )
}