// 나중에 로그인상태 상태변수 담아야하니까 
import {  useState } from "react";
// 이거해야함 저장소만드렁야해서
import { createContext } from "react";

//저장소
export const LoginContext = createContext()

//2 provider 정의한다
// AuthContext 컴포넌트는 Context 의 공급자 역할을 한다
// App 전체를 감싸서 user, login, logout 데이터를 전역으로 전달
// value={{데이터1, 데이터2}}에 값을 실어 나른다.
// Provider 를 할 수 있는 함수를 생성한다.
export default function LoginProvider({children}){

//상태변수 isLogin : 현재 로그인한 사용자 정보 저장
// 기본 값은 null -> 아직 로그인하지 않은 상태
// 기본 값은 => input에 입력할 때 빈값은 입력금지 alert 창으로 예외처리
const [user,setUser]= useState(null)

//로그인 함수
//이제 토글함수 만든거처럼 로그인상태 바꾸는 함수 만들어야함 
//사용자 이름을 받아 user객체로 저장
const login =(username)=>{
    setUser({name : username})
}

//로그아웃 함수 user를 null로 초기화
const logout = ()=>{
    setUser(null)
}


//Provider는 value 속성을 통해 하위 컴포넌트에 데이터를 공유
// children 은 <AuthProvider> ~~ </AuthProvider> 안의
// 포함된 컴포넌트를 의미한다.
return(
    //로그인상태랑 , 사실 setIsLogin이 changeLogin임 그냥 함수에 담은거 
    <LoginContext.Provider value={{user,setUser,login,logout}}>
        {children}
    </LoginContext.Provider>
)

}



