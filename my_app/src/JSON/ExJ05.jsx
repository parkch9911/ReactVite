import { useEffect,useState } from "react";

export default function ExJ05(){

    //JSON에서 불러온 값 담아내기용
const[data,setData] = useState([])

useEffect(()=>{
    //이건 JSON 불러오기용
fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    if(!res.ok){
        throw new Error(res.status)
    }
    return res.json()
})
.then((get)=>{
    setData(get)
})
.catch((err)=>{
    setErrMsg(err.message)
})
.finally(()=>{
    console.log('요청완료')
})
},[])

const[time,setTime]=useState(false)
//이건 시간용? 
useEffect(()=>{
    setTimeout(() => {
        setTime(true)
    }, 3000);
    return () => clearTimeout()
},[])

//참이면 목록 출력, 거짓이면 불러오는 중
    return(
    <>
        <ul>
            {time?
                (data.map((user)=>(
                <li key={user.id}>{user.name}</li>
                )))
            :
                <li>불러오는 중...</li>
            }
        </ul> 
    </>
    )
}