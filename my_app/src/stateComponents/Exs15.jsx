import React,{useState} from 'react'

export default function Exstate15(){
const [name,setName]=useState('홍길동') //초기값
const [age,setAge]=useState(20) //초기값
const reset =()=>{
    setName('김성중')
    setAge('43')
}

    return(
        <>
        <div>
            <p>{name} {age}</p>
            <button onClick={reset}>노화</button>
        </div>
        </>
    )
}
