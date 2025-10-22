import {useState } from "react";

        // console의 item 배열에 값이 추가되어도
        // React 입장에서는 item의 주소가 바뀌지
        // 않았다고 판단하여 화면을 업데이트 하지 않는다.
        // ,, 리렌더링을 하지 않아 화면에는 출력 X
export default function Exstate12(){
    const [item,setItem]=useState([])

    const addItem = ()=>{
        setItem([...item, `아이템 ${item.length+1}`])
    }


    return(
        <>
            <button style={{border:'1px solid black'}} onClick={addItem}>추가</button>
            <ul>
                {item.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}