import { useState } from "react";
import { Link } from "react-router-dom";
import '../common.css'

export default function Header(){
    return(
    <>
        <div className="top"></div>
        <div className="Header-wrap">
            <div className="Header-top">
                <div className="Header-top-left">
                    <Link>+BOOKMARK</Link>
                </div>
                <div className="Header-top-right">
                   <Link>로그인</Link>
                   <Link>회원가입</Link>
                   <Link>고객센터</Link>
                   <Link>장바구니</Link>
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
    </>
    )
}