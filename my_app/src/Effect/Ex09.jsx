import { useState,useEffect, use } from "react";

export default function Ex09(){
    //입력한 메시지가 여러개 담기는 상태변수
    const [msg,setMsg]=useState([])

    //input 입력을 담는 상태변수 
    const [inputText,setInputText]=useState('')

    //useEffect -> 메시지 a-> a, b-> b
    useEffect(()=>{
        if(msg.length > 0){
            //마지막에 입력된 메시지 출력 시킴
            let lastMsg = msg[msg.length-1]
            console.log('새 메시지'+lastMsg)
        }
    },[msg])


    //input 핸들러 함수
    const inputHandler = (e)=>{setInputText(e.target.value)}
    //온클릭 핸들러 함수
    const msgSubmit =()=>{
        // 빈 메시지 방지 예외처리
        if(inputText.trim()==='')return;
        //입력받은 메시지 배열에 push
        //얕은복사 => 배열,객체 [{}]
        const msgCopy = [...msg]
        msgCopy.push(inputText)
        setMsg(msgCopy)
        setInputText('') //인풋 텍스트입력값 초기화
    }
   return(
    <>
        <h2>간단 메시지 입력기</h2>
        <input type="text"
               placeholder="메시지를 입력하세요"
               onChange={inputHandler}
               value={inputText}>
        </input>
        <button type="button" onClick={msgSubmit}>전송</button>
        {/* 메시지 목록 출력 */}
        <ul>
            {msg.map((item,index)=>(
                <li key={index}>
                    {item}
                </li>
            ))}
        </ul>
    </>
   )
}