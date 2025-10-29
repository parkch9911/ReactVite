import { useState,useEffect } from "react";



function Message(){
    //useEffect 의존성 빈배열
    useEffect(()=>{
        console.log('메세지에 컴포넌트 나타남')
        //ClearUp함수 => 언마운트 될 때 실행되는 함수
        // unmount => 업데이트가 끝나고 리랜더링이 끝날 때
        return (()=>console.log('메세지 컴포넌트 사라짐'))
    },[])
    
    return <p>하이요 ㅋㅋ</p>
}

export default function Eff03(){
    const [show,setShow]=useState(true)
    return(
        <div>
            <button type="button" onClick={()=>setShow(!show)}>토글</button>
            {show && <Message/>}
        </div>
    )

}