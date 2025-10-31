import { useEffect,useState } from "react";

export default function ExJ03(){

//JSON에서 받아온 데이터 담을 변수 
const[data,setData] = useState([])

//에러 상태?  에 따라 화면출력 다르게하려고
const [isErr,setIsErr]=useState(false)
const [errMsg,setErrMsg]=useState(null)

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
.then((res)=>{
    if(!res.ok){
        throw new Error(res.status)
        //throw new Error(res.status) => 200~299 까지는 true 값으로 됨.
        //http 400/500에러는 fetch가 잡질 못함. 그래서 이거 써서 찾아주기
    }
    console.log(res.status) //상태 몇인지 // 200 
    return res.json()
    //boolean 형 데이터 타입 => 오직 참,거짓 논리값만 가지는 타입이다.
    //여기서 json() 메서드넣어야댐
})
.then((get)=>{
    setData(get)
//여기에서 셋데이터에 불러온거 넣기?
})
.catch((err)=>{
    //.catch는 res.ok 가 없으면 
    setErrMsg(err.message)
    setIsErr(true)
})
.finally(()=>{
    console.log('요청완료')
})
},[])


//여기에는 일단 에러 true false값으로
//true면  데이터요청실패!
//false면  데이터  보여주기

    return(
        <>
        <ul>
           {isErr? <p>데이터 요청 실패!</p>
           :(
              data.slice(0,3).map((user)=>(
            <li key={user.id}>{user.title.slice(0,5)}</li>
           ))
           )
           }
        </ul>
        </>
    )
}