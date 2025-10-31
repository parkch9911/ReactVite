import { useEffect,useState } from "react";
import UserList from "../JSON/UserList";

export default function ExJ04(){

const[data,setData] = useState([])

useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/posts')
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
console.log(data)
},[])




    return(
        <>
            <UserList data={data}/>
        </>
    )
}