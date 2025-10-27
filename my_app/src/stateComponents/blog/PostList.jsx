// 자식 컴포넌트 : UI
export default function PostList(props){

    return(
        <>
             <div className="blog">
                {/* 블로그 제목, 블로그 좋아요 */}
                {props.posts.map((post,index)=>(
                    //글 제목 부분
                    <div className="bloglist" key={index}> 
                        <h4 onClick={()=>{props.setModalOpen(true);
                                        props.setSelectedIndex(index);
                                    }} className="post" key={index}>{post}
                        </h4> 
                        {/* 버블링 : 자식을 선택해도 부모요소인
                        <h4> 태그가 실행됨
                        버블링을 해결하는 메소드 : e.stopPropagation.apply */}
                        <button onClick={(e) =>{
                            e.stopPropagation();
                            props.addLike(index)}
                        }>♥</button>

                        <span>{props.likes[index]}</span>

                        <p>10월 15일 발생</p>

                        <button style={{backgroundColor:'red',
                                        color:'white',
                                        marginBottom:'30px'
                        }} onClick={()=>props.delPost(index)}>삭제</button>

                    </div>))}
            </div>
        </>
    )
}