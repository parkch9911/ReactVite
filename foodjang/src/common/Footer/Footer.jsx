import { useState } from "react";
import { Link } from "react-router-dom";
export default function Footer(){
    return(
        <div className="Footer-wrap">
            <div className="Footer-top">
                <div className="Footer-top-left">
                    <Link>회사소개</Link>
                    <Link>공고</Link>
                    <Link>이용안내</Link>
                    <Link>개인정보처리방침</Link>
                    <Link>이용약관</Link>
                    <Link>입점문의</Link>
                    <Link>대량주문</Link>
                    <Link>1:1 문의</Link>
                    <Link>이용후기</Link>
                </div>
                <div className="Footer-top-right">
                    <Link to='/' onClick={()=>window.scrollTo(0,0)}>홈으로</Link>
                    <button type="button" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>위로가기</button>
                </div>
            </div>
            <div className="Footer-mid">
                <div className="Footer-mid-left">
                    <h3>고객센터</h3>
                    <h3>1899-4797</h3>
                    <p>평일 10:00~17:00</p>
                    <p>점심시간 12:00~13:00</p>
                    <p>토요일/일요일/공휴일 휴무</p>
                </div>
                <div className="Footer-mid-right">
                    <div className="Footer-mid-right-top">
                        <img src="../public/img/foodjanglogo.gif"/>
                        <div className="footertext">
                            <p>COMPANY : (주)푸드장 / OWNER : 조제효 / CALL CENTER : 1899-4797 / FAX : 02-356-8448</p>
                            <p>ADDRESS : 본사 (사무실) - 서울특별시 서초구 사임당로 52(서초동) 2층 푸드장</p>
                            <p>반품 주소지 (물류센터) - 경기도 고양시 일산동구 감내길 22푸드장</p>
                        </div>
                    </div>
                    <div className="Footer-mid-right-bottom">
                        <p>개인정보관리책임자 : 조제효 help@foodjang.com</p>
                        <p>사업자등록번호 : [188-87-00048] / 통신판매업 신고번호 : 제2023-서울서초-0995호 [사업자정보확인]</p>
                        <p>입금계좌 : (주)푸드장 - 기업은행 55503373004011 (기타 은행은 고객센터로 문의)</p>
                        <h4>Copyright (c) by foodjang.com. All Right Reserved.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}