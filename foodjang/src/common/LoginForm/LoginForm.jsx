import '../common.css'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";
import { useContext } from "react";
import { FoodjangContext } from "../../foodjangContext/FoodjangContext";

export default function LoginForm(){
//아디비번 초기값이랑 로그인함수 받아오기
const [id,setId]=useState('')
const [pw,setPw]=useState('')
const {login,user} = useContext(FoodjangContext)
//네비게이션 설정
const navigate= useNavigate();

const loginHandler =()=>{
    if(id === '박찬하'&& pw ==='1234'){
        login(id) // 사용자 정보 저장 // 이게 안되는거같음
        alert(`안녕하세요 ${id}님, 로그인 되었습니다.`)
        navigate('/') //홈으로 저장
        }else{
            alert('아이디 혹은 비밀번호를 다시 확인해주세요')
        }
}
    console.log(user)
    return(
        <div className="login-wrap">
            <h2 className="logtitle">로그인</h2>
            <div>
                <div className="logall">
                    <h3>회원 로그인</h3>
                    <div className="logbox1">
                        <input type="text" className="gettext" placeholder="아이디"
                        value={id} onChange={(e)=>setId(e.target.value)}/>
                        <input type="password" className="gettext" placeholder="비밀번호"
                        value={pw} onChange={(e)=>setPw(e.target.value)}/>
                        <button className="logbtn" type="submit" onClick={loginHandler}>로그인</button>
                        <div className="check">
                            <input type="checkbox" id="idcheck"/>
                            <label htmlFor ='idcheck'>아이디 저장하기</label>
                        </div>
                        <button className="logbtn2" type="button">카카오톡으로 회원가입/로그인</button>
                    </div>
                    <div className="logbox2">
                        <button className="box2btn1" type="button">회원가입</button>
                        <button className="box2btn2" type="button">아이디 찾기</button>
                        <button className="box2btn2" type="button">비밀번호 찾기</button>
                    </div>
                    <div className="logbox3">
                        <h3>비회원 주문조회 하기</h3>
                        <input type="text" placeholder="주문자명"/>
                        <input type="text" placeholder="주문번호"/>
                        <button type="button">확인</button>
                        <p>※주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기 바랍니다.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}