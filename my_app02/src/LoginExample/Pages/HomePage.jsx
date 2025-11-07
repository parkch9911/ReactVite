import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from 'react-router-dom'

export default function HomePage(){

const {user,logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const outBtn = ()=>{
        navigate('/')
        logout();
    }


    return(
        <>
         {user ? 
        (<>
            <h2>안녕하세요, {user}님 </h2>
            <button onClick={outBtn}>로그아웃</button>
        </>)
         : 
        (<>
            <h2>로그인이 필요합니다.</h2>
            <button onClick={() => navigate('/')}>로그인하러 가기</button>
            </>)}
        </>
    )
}