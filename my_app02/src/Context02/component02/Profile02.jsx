import { LoginContext } from "../AuthContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

//위에 이거 필요할까싶음 어차피 레이아웃에서 거르는데
export default function Profile02(){
    //user: 현재 로그인된 사용자의 정보를 가지고와야함
    const {user}=useContext(LoginContext)

    //만약 로그인 상태가 아니라면 => user가 null이면
    //로그인이 필요합니다. 메세지 출력, 로그인 페이지 이동
    if(!user){
        return(
            <div>
                <p>로그인이 필요합니다</p>
                {/* 로그인 페이지로 이동하는 링크 */}
                <Link to='/login'>로그인하러가기</Link>
            </div>
        )
    }
    //로그인 된 상태라면 프로필 화면 출력
    return(
        <div>
            <h1>프로필 페이지</h1>
            <p>환영합니다. {user.name}님</p>
            <p>굳데이~</p>
        </div>
    )
}