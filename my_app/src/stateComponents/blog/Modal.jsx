// 자식 컴포넌트 : UI


export default function Modal(props){
    // update함수 필요
    // update조건 => 얕은 복사 필요
    // 1. props.title을 얕은 복사한다.
    //    let titleCopy = [...props.title]
    // 2. prompt('새 제목을 입력하세요',~~~~)
    //    titleCopy[props.index] = prompt('새 제목을 입력하세요',titleCopy[props.index])
    // 3. titleCopy[props.index] => titleCopy[0] => 남자코트 추천
    // 4. 수정 한 글 제목을 update 해야 함
    //    props.setPosts(titleCopy)
const update = ()=>{
    let titleCopy = [...props.title]
    titleCopy[props.index] = prompt('새 글 제목을 입력하세요',titleCopy[props.index]) || titleCopy[props.index]
    props.setPosts(titleCopy)
}


    return(
        <>
            <div className="modal" style={{backgroundColor:props.color}}>
                <h4>{props.title[props.index]}</h4>
                <p>날짜 : 11월 1일</p>
                <p>상세내용 : 여기에 내용을 넣어 보세요</p>
                <button onClick={update}>글수정</button>
                <button onClick={props.onClose}>닫기</button>
            </div>
        </>
    )
}