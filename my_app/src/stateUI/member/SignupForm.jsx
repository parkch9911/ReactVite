import { useState } from "react";


//자식 컴포넌트 회원가입 창
export default function SignupForm(props){

    //이름
    const [name,setName]=useState('')
    //비밀번호
    const [pw,setPw]=useState('')

    //회원가입 함수
    const signup = ()=>{
        if(!name || !pw){return alert('입력해주세요')}
        props.onSuccess(name)
    }


    //가입 폼 화면
    return(
        <>
            <div className="signform">
                <input type="text" value={name} placeholder="이름"  onChange={(e)=>{setName(e.target.value)}}></input>
                <input type="password" value={pw} placeholder="비밀번호" onChange={(e)=>{setPw(e.target.value)}}></input>
                <button onClick={signup}>회원가입</button>
            </div>
        </>
    )


}
