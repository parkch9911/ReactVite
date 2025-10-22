
//useState() 훅(hook)를 import한다.
import React,{useState} from 'react'

// 함수 생성과 동시에 내보내는 방법
export default function Counter02(){

    console.log('1. 컴포넌트 마운트 됨 - 함수 실행 됨')
//useState()훅 이용하여 변수 지정
// const [이름, set이름] = useState(초기값)
    const [count,setCount] = useState(0) //초기값 0지정
    console.log('2. useState 호출 됨 - 초기값 0',count)


    console.log('3. 초기 렌더링 중... 화면에 count 표시 됨')
    //함수로 작성하기 : count 되는 함수
    const plus =()=>{setCount(count+1)}
        

    return(
        <>
            {/* <div>
                <p>카운트:{count}</p>
                <button onClick={plus}>증가</button>
            </div> */}
            <div>
                <p>카운트:{count}</p>
                <button onClick={()=>{
                    console.log('4.이벤트 발행 - setCount가 실행 요청')
                    setCount(count+1)
                    console.log('5.setCount 호출 후 , 비동기 상태로 대기 중')
                }}>
                    증가</button>
            </div>
        </>
    )
}