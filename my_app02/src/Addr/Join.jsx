import './Join.css'
import PostCode from './PostCode'

//회원가입 함수
export default function Join(){
    return(
        <div id='joinWrap'>
            <h1>JOIN</h1>
            <p>회원가입 하시면 다양한 혜택을 누리실 수 있습니다.</p>
            <div className='title'>
                <h1>회원정보 입력</h1>
                <p>*필수 입력사항 입니다.</p>
            </div>
            <form action='#' method='post'>
                <ul className='joinForm'>
                    <li>
                        <label htmlFor='userID'>아이디</label>
                        <input type='text' name='userID' id='userID'/>
                    </li>
                    <li>
                        <label htmlFor='userPW'>비밀번호</label>
                        <input type='password' name='userPW' id='userPW'/>
                    </li>
                    <li>
                        <label htmlFor='userPWre'>비밀번호 확인</label>
                        <input type='password' name='userPWre' id='userPWre'/>
                    </li>
                    <li>
                        <label htmlFor='userName'>이름</label>
                        <input type='text' name='userName' id='userName'/>
                    </li>
                    <li>
                        <label htmlFor='userEmail'>이메일</label>
                        <input type='email' name='userEmail' id='userEmail'/>
                    </li>
                    <li>
                        <label htmlFor='userID'>휴대폰 번호</label>
                        <input type='tel' name='userPhone' id='userPhone'/>
                    </li>
                    <li>
                        <label>주소</label>
                    {/* 이 부분에 PostCode 들어갈 예정 */}
                    <PostCode />
                    </li>
                </ul>
                <button type='submit' id='joinBtn'>회원가입</button>
            </form>
        </div>
    )
}