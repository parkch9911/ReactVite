// Movie부모

// import
import { useState } from "react";
import MoiveItem from './MovieItem'

    //기본 초기값
export default function MovieApp(){
    const [review,setReview]=useState([
        {id:0, title:'디지몬',dep:'끝내줘용'},
        {id:1, title:'사랑과 영혼',dep:'인생영화'},
        ])

    //인풋값
    const [input1,setInput1]=useState('')
    const [input2,setInput2]=useState('')
    const inputTitle = (e)=>{setInput1(e.target.value)} // 내가 입력한 값이 대상이 되는 이벤트에 값이 안으로 들어가라
    const inputReview = (e)=>{setInput2(e.target.value)}

    //배열 추가 함수
    const addReview =()=>{
        let ReviewCopy = [...review]
        ReviewCopy.push({id:review.length,title:input1,dep:input2})
        setReview(ReviewCopy)
    }
    //배열 삭제 함수
    const delReview=(index)=>{
        let ReviewCopy = [...review]
        ReviewCopy.splice(index,1)
    }

    return(
        <>
        {/* 맨 위 인풋창 */}
             <div>
                <h2>영화 리뷰 관리 앱💩</h2>
                <input type="text" placeholder="영화 제목" onChange={inputTitle} value={input1}></input>
                <input type="text" placeholder="관람평" onChange={inputReview} value={input2}></input>
                <button onClick={addReview}>추가</button>
            </div>
        {/* 영화 목록 */}
            <MoiveItem review = {review} //배열 넘기기
                       delReview = {delReview} //삭제버튼 함수
            />
        </>
    )
}


