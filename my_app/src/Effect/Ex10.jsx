import { useState,useEffect } from "react";

export default function Ex10(){
    //========================문제없는거========================
    //인풋값 담는거
    const [inputText,setInputText]=useState('')

    //내가 필터링한 변수를 담아주는 상태 변수
    //배열이름.filter(()=>{return 조건})
    //조건에 만족하는 데이터를 추출한다. 추출해서 새로운 배열에 반환
    //조건에 만족하지 않으면 빈 배열을 반환한다.
    const [filterList,setFilterList]=useState([])

    //원본배열
    const users = [{ id: 1, name: 'Alice', email: 'alice@example.com' },
                    { id: 2, name: 'Bob', email: 'bob@example.com' },
                    { id: 3, name: 'Charlie', email: 'charlie@example.com' },
                    { id: 4, name: 'David', email: 'david@example.com' },
                    ];
    //useEffect
    useEffect(()=>{
        //검색어에 공백이 들어가도 사용자가 표시 되도록 예외처리
        //input텍스트에 스페이스바로 인한 공백을 무시하는 함수
        //trim() -> 좌우 공백제거 => true, false
        //문자가 입력되어 있으면 true
        //문자가 입력되어있지 않으면 false 
        if(!inputText.trim()){
            setFilterList(users)
            return  
        }
        //filter
        //유저스 배열을 필터링한다. 유저스의 이름을 대문자로 인풋텍스트가 포함하는걸
        const ResultFilter = users.filter((user)=>user.name.toUpperCase().includes(inputText.toUpperCase()))
                            setFilterList(ResultFilter)
                            },[inputText])

   return(
    <div>
        <h2>간단 사용자 검색</h2>
        <input type="text"
               placeholder="이름 또는 이메일 검색"
                value={inputText}
                onChange={(e)=>setInputText(e.target.value)}
               >
        </input>

        <ul>
            {filterList.map((users)=>(
                <li key={users.id}>
                    {users.name}({users.email})
                </li>
            ))}
        </ul>
        {/* 검색 결과 존재하지 않을 때 출력 문*/}
        {filterList.length === 0 && <p>검색결과가 존재하지 않습니다.</p>}
    </div>
   )
}