import {useState} from "react";

// React에서는 화면 상태도 데이터로 관리한다.
export default function LoginView(){

    // 로그아웃 상태
    // isLogin = false
    const [isLogin, setIsLogin] = useState(false)
    return(
        <>
            <div>
                {isLogin ? <h2>Welcome Back!</h2> : <h2>Please Login</h2>}
                <button onClick={()=>setIsLogin(!isLogin)}>{isLogin? '로그아웃':'로그인'}</button>
            </div>
        </>
    )
}
