import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom'

export default function LoginPage(){
    //id, pw 상태 지정 변수 생성
    const[id,setId]=useState('')
    const[pw,setPw]=useState('')
    
    const {login} = useContext(AuthContext)
    //useNavigate 훅을 변수로 정의 해준다.
    const navigate = useNavigate()
   
    
    //id = 'admin' 이면서 pw=1234 로그인 성공
    // 로그인 성공시 alert(로그인 성공)
    // 로그인 성공시 home 페이지로 이동
    // 아니면 'id, pw 확인하세요
    const logBtn = ()=>{
        if(id ==='admin' && pw ==='1234' ){
            //내 id명을 home에 출력해야함
            login(id);
            alert('로그인 성공')
            //논리 구현 함수 안에 Link 사용 금지
            navigate('/home')
            //현재페이지보다 한 단계 앞 페이지로 이동 navigate(1)
            //현재페이지보다 한 단계 뒤 페이지로 이동 navigate(-1)
            // 단 history에 페이지가 존재해야함
            //현재페이지에서 새로고침 navigate(0)
        }else{
            alert('아이디 혹은 패스워드를 확인하세요')
        }}


    return(

        <div>
            <h2>로그인페이지</h2>
            <input type="text" placeholder="id" value={id} onChange={(e)=>setId(e.target.value)}></input>
            <input type="password" placeholder="pw" value={pw} onChange={(e)=>setPw(e.target.value)}></input>
            <button onClick={logBtn}>로그인</button>
        </div>
    )
}