import './Join.css'
import PostCode from './PostCode'



export default function Join(){

    return(
        <>
        
            <div className='jointop'>
                <h2>회원가입</h2>
                <span>필수입력사항은 * 로 표기됩니다.</span>
            </div>
            {/* 이 div가 폼이 되어야함  */}
            <div className='joinwrap'> 
                <ul>
                    <li>
                        <label htmlFor='userID'>아이디<em>*</em></label>
                        <input type='text' placeholder='아이디를 입력해주세요' name='userID' id='userID'/>
                    </li>
                    <li>
                        <label htmlFor='userPW'>비밀번호<em>*</em></label>
                        <input type='password' placeholder='비밀번호를 입력해주세요' name='userPW' id='userPW'/>
                    </li>
                    <li>
                        <label htmlFor='userPWre'>비밀번호 확인<em>*</em></label>
                        <input type='password' placeholder='비밀번호를 다시 입력해주세요' name='userPWre' id='userPWre'/>
                    </li>
                    <li>
                        <label htmlFor='userName'>이름<em>*</em></label>
                        <input type='text' placeholder='이름을 입력해주세요' name='userName' id='userName'/>
                    </li>
                    <li>
                        <label htmlFor='userPhone'>휴대폰 번호<em>*</em></label>
                        <input type='tel' placeholder='휴대폰 번호를 입력해주세요' name='userPhone' id='userPhone'/>
                    </li>
                    <li>
                        <label htmlFor='userEmail'>이메일</label>
                        <input type='email' placeholder='이메일을 입력해주세요' name='userEmail' id='userEmail'/>
                    </li>
                </ul>
                <hr/>
                <div className='addBox'>
                    <label>주소</label>
                    <PostCode/>
                </div>
                <button type='submit' id='joinBtn'>회원가입</button>
            </div>
        </>
    )
}