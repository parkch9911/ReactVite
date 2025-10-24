// Movie자식 추가된 영화 목록 박스? 라고 이해해야하나
import { useState } from "react"
import MovieModal from "../movie/MovieModal"
export default function MovieItem(props){

    //모달 함수
    const [modalOpen,setModalOpen] = useState(false) //모달창 클릭하면 true되게끔
    //생성된 모달 닫기버튼 누르면 다시 false
    const changeModal =()=>{ 
        console.log(props.review.id) 
        setModalOpen(!modalOpen)//모달오픈값에 본래의 반대값을 넣는다.
        console.log(modalOpen)
    }

    return(
        <>
            <div>
                {props.review.map((item,index)=>(
                    <ul key={index}>
                        <li>
                            <span>{item.title}</span>
                            <button onClick={()=> props.delReview(index)}>삭제</button>
                            <button onClick={()=> changeModal(index)}>상세보기</button>
                        </li>
                    </ul>
               ))}
            </div>
            <MovieModal review = {props.review}
                        modalOpen = {modalOpen}
                        changeModal = {changeModal}        
            />
        </>
    )
}
