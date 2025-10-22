import React,{useState} from 'react'

export default function Exstate16(){
const [user,setUser] = useState({name:'성중',age:43}) //초기값
const plus =()=>{
    setUser({name:'성중',age:user.age+1})
    setUser((user.age)+1)
}
    return(
        <>
        <div>
            <p>{user.name} - {user.age}</p>
            <button style={{border:'1px solid black'}} onClick={plus}>떡국</button>
        </div>
        </>
    )
}
