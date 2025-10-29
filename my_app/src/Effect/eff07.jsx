import { useState,useEffect, use } from "react";

export default function Eff06(){
    const [user,setUser]= useState([]);
    //useEffect(()=>{})
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return(
       <>
            <ul>
            {user.slice(0,5).map((user)=>(
                <li key={user.id}>{user.title}</li>
            ))}
            </ul>
       </>
    )
}