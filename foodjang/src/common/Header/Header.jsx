
import { Link } from "react-router-dom";
import '../common.css'
import { useNavigate} from 'react-router-dom'
import { useContext } from "react";
import { FoodjangContext } from "../../foodjangContext/FoodjangContext";
import { useEffect } from "react";

export default function Header(){

    const {user,logout,login}=useContext(FoodjangContext)
    const navigate = useNavigate();
    const logoutHandle =()=>{
        logout()
        navigate('/')
    }
    console.log(user)

    return(
    <>
        <div className="top"></div>
        <div className="Header-wrap">
            <div className="Header-top">
                <div className="Header-top-left">
                    <Link>박찬하</Link>
                </div>
                <div className="Header-top-right">
                   {user? //로그인하면 user값이 있으면
                   <button onClick={logoutHandle}><span>{user}</span>님, 로그아웃</button>
                   : //이게 초기 null값일때임. 
                   <button onClick={()=>navigate('/login')} >로그인</button>
                   }
                   <Link>고객센터</Link>
                   <Link to='/join'>회원가입</Link>
                   <Link to='/wish'>찜 목록</Link>
                </div>
            </div>
            <div className="Header-mid">
                <div className="Header-mid-left"></div>
                <div className="Header-mid-center">
                    <Link to='/'><img alt="FoodJangLogo" src="../public/img/foodjanglogo.gif"/></Link>
                    
                </div>
                <div className="Header-mid-right">
                    <input type="text" placeholder="어떤 음식을 찾으시나요?" ></input>
                    <button type="submit">🔍︎</button>
                </div>
            </div>
            <div className="Header-bottom">
                    <Link to='/all/'>전체</Link>
                    <Link to='/new'>신상레시피</Link>
                    <Link to='/best/'>베스트</Link>
                    <Link to='/fast/'>빠른조리</Link>
                    <Link to='/rate/'>평점순</Link>
            </div>
        </div>
        <div className="head-line"></div>
    </>
    )
}