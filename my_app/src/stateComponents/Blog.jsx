import React,{useState} from "react"

export default function Blog(){

    // 블로그 제목용 변수, 초기 값
    const [posts, setPosts]= useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
    // 좋아요 용 변수, 초기 값
    const [likes, setLikes]= useState([0,0,0]);
    // 블로그 글 생성용 변수
    const [inputValue, setInputValue]=useState('');

    // 실행 로직 함수
    //==================================================================================
    // 글 추가 함수
    const addPost = ()=>{
        // 글을 입력하면 위로 추가 배열이름.unShift 이용
        // 배열 또는 오브젝트, 오브젝트 배열은 React에서 useState 훅 사용 시,
        // 힙의 메모리 주소가 같은지 다른지를 비교하여 렌더링한다.
        // 고로, 얕은 복사를 해야한다.
        // 얕은 복사 형식 : [...배열이름]

        // 예외처리 : 혹시 모를 데이터의 불필요한 에러를 로직으로 처리
        // input의 입력값이 공백 일 때 추가 금지하는 코드 필요
        if(inputValue.trim() === ''){
            return alert('자료를 입력하세요')
        }
        let postCopy = [...posts] //얕은복사
        // 위로 추가하기
        postCopy.unshift(inputValue)
        // setPosts 함수형 변수에 변경된 변수를 담아둔다.
        setPosts(postCopy)

        //==========================
        //좋아요 추가 코드
        let likeCopy = [...likes]
        likeCopy.unshift(0)
        setLikes(likeCopy)

        //input에 입력한 글이 발행버튼 클릭과 동시에 지워지는 코드
        setInputValue('')
    }
//=====================================================================================
    //글 삭제 함수
    //내가 삭제 할 글의 인덱스 번호를 알아야 삭제 함 (index)=>{}
    // 배열 삭제 프로퍼티 : splice(시작위치, 삭제할 길이)
    const delPost = (index)=>{
        
        //얕은 복사 , splice, 리렌더
        let postCopy = [...posts]
        postCopy.splice(index,1)
        setPosts(postCopy)

        //====이건 좋아요
        let likeCopy = [...likes]
        likeCopy.splice(index,1)
        setLikes(likeCopy)
    }
//======================================================================================
    // 좋아요 증가 함수
    // 증가해야 하는 index번호 모르면 증가가 안됨
    const addLike = (index)=>{
        //얕은 복사
        let likeCopy = [...likes]
        //좋아요 증가
        likeCopy[index]+= 1;
        //업데이트
        setLikes(likeCopy)
    }
//-------------------------모달----------------------------
    const [modalOpen,setModalOpen] = useState(false);
    // 선택된 글의 인덱스 지정
    const [selectedIndex,setSelectedIndex]=useState(null)







    //-------------------------------------------------------추가-- 알아두면 좋은거
    // React에서 로직함수 생성 후 return안에 태그에 지정하는 방식의 
    // 차이로 인해 랜더링이 안될 수 있다.
    // 1. onClick = {addPost} : 이건 클릭 할 때 마다 실행   (정상)
    // 2. onClick = {()=> addPost()} : 클릭 할 때 마다 실행 (정상)
    // 3. onClick = {addPost()} : 랜더링 시 바로 실행, 일명 즉시 실행 함수
    //-----------------------------------------------------------------------

    //좋아요 작동,
    //제목이 어디로 들어가는거지 선생님은 h4에

    return(

        <>
            <div className="blog">
                {/* 블로그 제목, 블로그 좋아요 */}
                {posts.map((item,index)=>(
                    //글 제목 부분
                    <div className="bloglist">
                        <h4 onClick={()=>{setModalOpen(true);
                                        setSelectedIndex(index);
                                    }} className="post" key={index}>{item}</h4> 

                        <button onClick={() => addLike(index)}>♥</button>

                        <span>{likes[index]}</span>

                        <p>10월 15일 발생</p>

                        <button style={{backgroundColor:'red',
                                        color:'white',
                                        marginBottom:'30px'
                        }} onClick={()=>delPost(index)}>삭제</button>

                    </div>))}
            </div>

            <div>
                <input placeholder="글 제목 입력" onChange={(e)=>{setInputValue(e.target.value)}} value={inputValue}/>
                <button onClick={addPost}>글 발행</button>
                {/* 자식 modal에 데이터 보내기
                1. 글 제목 title    수정해야하니까 set도 같이
                2. 글 인덱스
                3. 모달 논리값 함수
                4. color */}
                {modalOpen && <Modal
                color={'lightgray'}
                title={posts}
                setPosts={setPosts}
                index={selectedIndex}
                onClose={()=>{setModalOpen(false)}}
                 />}
            </div>
        </>
    )


}

function Modal(props){
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