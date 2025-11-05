import { LoginContext } from "../AuthContext";
import { useContext } from "react";
import {Link} from 'react-router-dom';


export default function Header02(){
    //로그인 상태에따라 변하고 로그아웃도 할 수 있어야하니까 
    const {user,logout} = useContext(LoginContext)

    return(
        <header>
            <h1>Context 인증 실습</h1>
            <Link to='/'>홈</Link>
            {user?
                (<div>
                    <Link to='/profile'>프로필</Link>
                    <button type="button" onClick={logout}>로그아웃</button>
                </div>
                ):(
                <div>
                    <Link to='/login'>로그인</Link>
                    <p>로그인하세요</p>
                </div>)}
        </header>
    )

}