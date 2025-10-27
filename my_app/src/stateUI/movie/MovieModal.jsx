// Movie자식 선택된 영화 상세정보 모달
import { useState } from "react"


export default function MovieModal(props){
//현재 false값이 기본이라서 && 썼으니 안보이는 상황, 
// App.jsx에서 modalOpen의 fasle값을 받았으니까 이게 가능한거겠지 일단.

// 근데 이제 Item.jsx에서 실행한 changeModal 버튼이 작동을 안함.
// 해당 모달창이 어떤 상세보기를 클릭 했을 때 나와야하는지 몰라서 그런가. 
// const로 선언돼서 무조건 set을 이용해서 변경하라는데 이해못했음.

// 그러면 map을 tree구조로 넘겨줘야하는가.


// 끝날 시간 현재 문제점 : 부모 컴포넌트에서의 배열의 인덱스값?, 각 해당하는 배열의 키 값이 정의되지않음. 
    return(
        <>
            {props.modalOpen &&<div className="modalbox">
                <div className="modalbox-top">
                    <button onClick={props.changeModal}>🗙</button>
                </div>
                <p>{props.review.title}</p>
                <span>{props.review.dep}</span>
                <button onClick={props.changeModal}>닫기</button>
            </div>
            }
        </>
    )
}
