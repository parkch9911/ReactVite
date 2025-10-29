import { useState,useEffect } from "react";

export default function Eff06(){
    //사용자의 목록을 담을 변수 지정
    const [user,setUser]=useState([])
    // reload : 버튼 클릭 하면 새로고침(재요청) 제어할 상태  
    const [reload,setReload] = useState(false);
    //isLoad : 데이터를 불러오는중인지 여부를 체크
    const [isLoad,setIsLoad] = useState(false);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
        // 가져온 데이터를 유저라는 상태에 저장
        setUser(data);
        // 데이터의 로딩 완료 상태
        });

        setTimeout(() => {
        setIsLoad(true);  // 로딩 시작 상태 변경
        setIsLoad(false);
        }, 3000);
        }, [reload]); //reload가 값이 바뀔때마다 useEffect 재실행
                        //reload가 변경 될 때 마다 데이터를 다시 불러옴
        

    return(
       <>
            {/* 버튼 클릭 시 reload가 상태를 반전 시켜 useEffect  재실행 유도 */}
            {/* reload가 ture면 false */}
            <button onClick={()=>{setReload(!reload);setIsLoad(true);}}>불러오기</button>
            {/* 로딩중이면 로딩중.. 문구 표시, 아니면 map */}
            {isLoad ? <p>로딩중...</p>
            :
            <ul>
                {user.map((user)=>(
                <li key={user.id}>{user.name}</li>
                ))}
            </ul>}
       </>
    )
}