import { useEffect,useState } from "react";

export default function Exfetch(){
    // 1. 상태변수
    //    로딩 중 표시
    const [loading,setLoading]=useState(true)
    // 가져온 데이터 저장
    const [data,setData]=useState([])
    // 에러 메시지 저장
    const [errMsg,setErrMsg]=useState(null)

    useEffect(()=>{

        console.log('데이터 요청 시작')
        fetch('https://jsonplaceholder.typicode.com/users')
        //res => response객체의 약어
        //이미 React에 객체로 존재한다.
        .then((res)=>{
            //상태가 정상이면 true, 비정상이면 false반환하는
            //res.ok = true
            if(!res.ok){
                //HTTP 상태의 코드를 확인
                throw new Error(`http error status: ${res.status}`)
            }
            //JSON 파싱( 해석 ) 
            return res.json() 
        })
        .then((getdata)=>{
            //지금 불러온 데이터는 이 부분에만 존재한다.
            console.log('가져온 데이터', getdata)
            setData(getdata)
        })
        //error를 catch 한다라는 의미
        .catch((err)=>{
            console.log(`X 에러 발생`,err)
            //에러 상태 저장
            // .message => response 객체가 가지고 있는 메서드
            setErrMsg(err.message)
        })
        //에러가 성공/실패 상관없이 무조건 실행
        .finally(()=>{
            console.log('요청완료')
            // 로딩중 true 면 로딩중...
            // false로 바꿔서 종료를 시켜줘야함. 
            // 종료 안하면 계속 로딩중
            setLoading(false)
        })
    },[]) // <= 빈 배열 이용하여 1회만 실행


    //2. 화면 표시
    // 불러오는중.. 출력
    // => 조건 : loading == true
    if(loading){
        return <p>데이터 불러오는 중...</p>
    }
    //error 출력
    if(errMsg){
        return <p>x에러 : {errMsg} </p>
    }

    return(
        <div>
            <h2>사용자 목록</h2>
            <ul>
                {data.map((data)=>(
                    <li key={data.id}>
                        {data.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}