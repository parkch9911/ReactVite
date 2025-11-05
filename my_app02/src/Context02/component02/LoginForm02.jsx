import { LoginContext } from "../AuthContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";


export default function LoginForm02(){
    
    const {user,login,setUser}=useContext(LoginContext)
    const [username,setUsername]=useState('')

    //폼 제출시 실행되는 함수
    //form => submit 
    const submitHandler = (e)=>{
        //기본 폼 제출(새로고침) 막는 코드
        //e.prev/ntDefault();
        //입력값이 공백이면 alert창 띄우기
        if(user==='') return alert('이름을 입력하세요')

        // login함수 실행 -> 전역 상태에 로그인 정보 저장
        login(username)
    }

    return(
        <>
            {user?(
                <div>
                    {/* 로그인 된 사용자 이름 출력해야한다. */}
                    <p>{user.name}님, 로그인 되었습니다.</p>
                    <Link to='/profile'>
                        <button type="button">프로필로 이동</button>
                    </Link>
                </div>)
                :
                (
                    // user가 없으면(=로그인 안 된 상태) 로그인폼 보여주기
                    <form onSubmit={submitHandler}>
                        <h1>로그인</h1>
                        <input type="text" 
                                placeholder="이름" 
                                value={user} 
                                onChange={(e)=>setUsername(e.target.value)}/>
                        {/* 로그인 버튼 => 클릭하면 서브밋핸들러 실행 */}
                        <button type="submit">로그인</button>
                    </form>

                )
            }
        </>
    )
}