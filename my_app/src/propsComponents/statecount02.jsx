
//useState() 훅(hook)를 import한다.
import React,{useState} from 'react'

// 함수 생성과 동시에 내보내는 방법
export default function Counter02(){
//useState()훅 이용하여 변수 지정
// const [이름, set이름] = useState(초기값)
    const [count,setCount] = useState(0) //초기값 0지정

    //함수로 작성하기 : count 되는 함수
    const plus =()=>{setCount(count+1)}

    return(
        <>
            <div>
                <p>카운트:{count}</p>
                <button onClick={plus}>증가</button>
            </div>
        </>
    )
}