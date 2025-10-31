import { use, useEffect,useState } from "react";

//1. 상태변수 유무 생각
//2. useEffect를 어디에 사용할건지
//3. UI에 어떻게 출력할건지 생각
//4. 컴포넌트 분리 유무도 생각
//5. JSON을 이용해 데이터를 가져오기 해야하는 상황도 고려
// user id 파라미터 상태를 저장하는 변수 필요
//6. 상태변수를 사용하는 경우 useState(초기값)을 고려

export default function ExJ01(){
 
    const [userId,setUserId]=useState(1)
    // user를 userId 에 해당하는 부분만 출력되도록 물어보는
    // 상태변수 필요 = 모달에 해당
    const [user,setUser]=useState(null)
    //useEffect를 이용해서 JSON 데이터 받기
    useEffect(()=>{
            // JSON의 URL 부분의 파라미터 형식으로userId 가져온다.
            // 사용방법 ~/user/${userId}
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //res의 원문 response,객체가 이미 React에 존재한다.
        .then((res)=>{
            return res.json()
        })
        .then((getdata)=>{
            setUser(getdata)
        })
        //내가 JSON에서 가져오는 데이터가 실패성공 상관없이 출력
        .finally(()=>{
            console.log('요청완료')
        })
    },[userId])

    //userId를 증가시키는 함수
    //핸들러함수란 : 본인 혼자는 아무것도 할 수 없는 함수
    //누군가 이벤트로 이 핸들러함수를 사용해줘야함
    const idCountHandler=()=>{
        setUserId(userId+1)
    }

    //화면 그리기
    return(
        <>
            <h2>현재 선택된 사용자 ID : {userId}</h2>
            <button onClick={idCountHandler}>다음</button>
            {/* user가 값이 존재하면 <div>태그를 그리기 */}
            {/* user가 값이 null이면 <div> 안그리기 */}
            {user &&
                <div>
                    <p>{user.name}</p>        
                    <p>{user.email}</p>        
                </div>
            }
        </>
    )

}