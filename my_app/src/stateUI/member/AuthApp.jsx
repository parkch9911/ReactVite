import { useState } from "react";
import LoginForm from '../member/LoginForm'
import SignupForm from '../member/SignupForm'
import Message from '../member/Message'



//부모는 전체 로그인/회원가입 페이지의 '상태전환'담당
// isLogin, msg 상태를 관리
// 로그인/회원가입 성공 시 msg 를 바꿈


//Login/ SignupForm (자식)
// 입력창 2개, (name,pw)
// 버튼 클릭 시 onSuccess(name) 콜백 실행 -> 부모에게 이름 전달

//부모 컴포넌트로 회원가입의 상태, msg만 관리함
export default function AuthApp(){
    const [isLogin,setIsLogin]=useState(true)
    const [msg,setMsg]=useState('')

    return(
        <>
            <div style={{padding:'20px'}}>
                <h2>🔐Login/Sign UP</h2>
                <Message msg={msg}/>
                {/* 회원가입하고 회원가입 버튼 클릭하면
                회원가입 완료! 환영합니다. {name}님 */}
                {/* 로그인이 완료되면 환영합니다. {name}님 */}

                {isLogin? 
                <LoginForm onSuccess={(name)=>setMsg(`로그인 완료! 환영합니다.${name}님`)} />
                :
                <SignupForm onSuccess={(name)=>setMsg(`회원가입 완료! 환영합니다.${name}님`)}/>}

                <button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin?'회원가입하기':'로그인하기'}</button>
            </div>
        </>
    )
}