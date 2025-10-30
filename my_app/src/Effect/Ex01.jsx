import { useState,useEffect } from "react";

export default function Ex01(){
    //모든 HOOK은 생명주기가 존재한다.
    //마운트(랜더 시작) => 업데이트(setUpdate) => 언마운트 ( 업데이트 리랜더되면(삭제))

    //useState() => 랜더, 업데이트 필요할 때

    //useEffect =>  랜더 이외의 작업, 
    //              네트워크에서 자료 가져오는 일 ...

    // useEffect(()=>{}) -- 랜더 마다 실행
    // useEffect(()=>{},[]) -- 처음 랜더 될 때 1회 실행
    // useEffect(()=>{}.[의존성 배열]) -- 의존성 배열이 실행 될 때 마다
    useEffect(()=>{
        console.log('컴포넌트가 마운트되었습니다!')
    },[])

    return(
        <>

        </>
    )
}