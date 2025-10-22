import React,{useState} from 'react'

//props는 부모에서 자식으로 데이터를 읽기 전용으로 보낸다.
//props로 보내고 받을 수 있는 것.
//값, 변수, 함수


//부모의 변경함수 넘겨주기
//부모는 정보만 전달한다.
export default function Exstate18(){
const [num,setNum] = useState(0) //초기값

    return(
        <>
            {/* <p>값:{num}</p> */}
            <Child18 num2={num} increase={()=>{setNum(num+1)}}/>
        </>
    )
}

//자식
function Child18(props){
    return(
        <>  
            <p>값:{props.num2}</p> 
            <button onClick={props.increase}>+1</button>
        </>
    )
}
