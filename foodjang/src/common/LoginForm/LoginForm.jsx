import { Link } from "react-router-dom";
import '../common.css'

export default function LoginForm(){

    return(
        <div className="login-wrap">
            <h2 className="logtitle">로그인</h2>
            <form>
                <div className="logall">
                    <h3>회원 로그인</h3>
                    <div className="logbox1">
                        <input type="text" className="gettext" placeholder="아이디"/>
                        <input type="password" className="gettext" placeholder="비밀번호"/>
                        <button className="logbtn" type="submit">로그인</button>
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
            </form>
        </div>
    )
}