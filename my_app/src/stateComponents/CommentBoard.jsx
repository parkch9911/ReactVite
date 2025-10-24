import React,{useState} from "react";
import './CommentBoard.css'



export default function CommentBoard(){
    const [comments, setComments] = useState([
            { id:0, text: '리액트 재밌어요!', like: 0},
            { id:1, text: 'useState 너무 신기해요', like: 0},]);

    const [inputVal,setInputVal]=useState('')

    const addinput =(e)=>{setInputVal(e.target.value)}
    //배열 생성 함수
    const makecomment =()=>{
        let copyCom = [...comments]
        copyCom.unshift({id:comments.length,text:inputVal,like:0})
        setComments(copyCom)
    }

    //배열 삭제 함수
    const delcomment =(index)=>{
        let copyCom = [...comments]
        copyCom.splice(index,1)
        setComments(copyCom)
    }
    //좋아요 함수
    const likeBtn= (index)=>{
        let copyCom = [...comments]
        copyCom[index].like+=1;
        setComments(copyCom)
    }



    return(
        <>
            <CommentItem
            com = {comments}
            add={addinput} // e 타겟 밸류
            val={inputVal}
            
            like={likeBtn}
            delBtn={delcomment}  
            makeBtn={makecomment}
            />
        </>
    )
}

//-------------------금요일에 질문하기 저 자식 미텡 index 가진놈들 화살표 함수 자체를 부모에서 처리하는방법
//자식

function CommentItem(props){
    console.log(props.com)
    return(

        <>
            <div className="containAll">
                <div className="commentTop">
                    <h3>댓글게시판</h3>
                    <input placeholder="댓글 입력" onChange={props.add} value={props.val}></input>  
                    <button onClick={props.makeBtn}>등록</button>
                </div>


                <div className="commentBottom">
                    {props.com.map((item,index)=>(
                    <div key={index}>
                        <span>{item.text}</span>
                        <button onClick={() => props.like(index)}>❤️</button>
                        <span>{item.like}</span>
                        <button onClick={() => props.delBtn(index)}>삭제</button>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}