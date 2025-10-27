//부모 컴포넌트 : state 는 모두 부모
import { useState } from "react";
//자식 postlist.jsx   Modal.jsx   import한다.
//그래야 부모가 자식 컴포넌트를 카드 태그형식으로 가져 올 수 있음.
import PostList from "./PostList";
import Modal from "./Modal";

export default function BlogC(){
 
        // 블로그 제목용 변수, 초기 값
        const [posts, setPosts]= useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
        // 좋아요 용 변수, 초기 값
        const [likes, setLikes]= useState([0,0,0]);
        // 블로그 글 생성용 변수
        const [inputValue, setInputValue]=useState('');
    
    //-------------------------모달----------------------------
        const [modalOpen,setModalOpen] = useState(false);
        // 선택된 글의 인덱스 지정
        const [selectedIndex,setSelectedIndex]=useState(null)
    //==================================================================================
    // 글 추가 함수
    const addPost = ()=>{
        if(inputValue.trim() === ''){
            return alert('자료를 입력하세요')
        }
        let postCopy = [...posts] 
        postCopy.unshift(inputValue)
        setPosts(postCopy)
        //좋아요 추가 코드
        let likeCopy = [...likes]
        likeCopy.unshift(0)
        setLikes(likeCopy)
        setInputValue('')
    }
    //글 삭제 함수
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

    return(
        <>
        {/* 자식 컴포넌트로 블로그 글 목록 UI로 출력 */}
            <PostList posts = {posts}
                      likes = {likes}
                      setModalOpen = {setModalOpen}
                      setSelectedIndex = {setSelectedIndex}
                      delPost = {delPost}
                      addLike = {addLike} />

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
