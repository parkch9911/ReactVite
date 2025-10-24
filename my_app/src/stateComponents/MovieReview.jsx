import React,{useState} from "react"
import './MovieReview.css'

export default function Review(){

    const [review,setReview]=useState([
        {id:0, title:'인셉션',comment:'꿈 속의 꿈! 최고였어요.', likes:0},
        {id:1, title:'인터스텔라',comment:'음악이 너무 웅장해요.', likes:0}]);

    const [inputValue1, setInputValue1]=useState('');
    const [inputValue2, setInputValue2]=useState('');

        //배열 생성하는 함수
    const addReview = ()=>{
          if(inputValue1.trim() === '' || inputValue2.trim() === ''){
            return alert('뭐라도 좀 쓰세요')
        }
        let reviewCopy = [...review]
        reviewCopy.push({id:review.length, title:inputValue1, comment:inputValue2, likes:0})
        setReview(reviewCopy)
        setInputValue1('')
        setInputValue2('')
    }
        //배열 삭제하는 함수
    const delReview = (index)=>{
        let reviewCopy = [...review]
        reviewCopy.splice(index,1)
        setReview(reviewCopy)  
    }
        //좋아요 누르는 함수
    const likeBtn = (index)=>{
        let reviewCopy = [...review]
        reviewCopy[index].likes+= 1;
        setReview(reviewCopy)
    }
    //엔터로 입력되게
    const EnterPress = (e) => {
    if (e.key === "Enter") {
      addReview()
    }
    };


    return(
        <>

            <div className="movieInputbox">
                <h3>🎥나의 영화 리뷰</h3>
                <div className="topbox">
                    <input className="titleinput" placeholder="영화 제목" onKeyUp={EnterPress}  onChange={(e)=>{setInputValue1(e.target.value)}} value={inputValue1}></input>
                    <input className="commentinput" placeholder="한줄평" onKeyUp={EnterPress}  onChange={(e)=>{setInputValue2(e.target.value)}} value={inputValue2}></input>
                </div>
                <button onClick={addReview}>등록</button>
            </div>


            <div className="review">
                {review.map((item,index)=>(
                    <div key={index} className="moivereviewBox">
                        <h4 className="title">{item.title}</h4>
                        <p>{item.comment}</p>
                        <button onClick={() => likeBtn(index)}>👍</button>
                        <span>{item.likes}</span>
                        <button className="del" onClick={()=>delReview(index)}>삭제</button>
                    </div>
                ))}
            </div>

        </>
    )
}