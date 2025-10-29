
export default function TableCommit(props){
    return(
        <>
            <div className="commitBox">
                <p>주문이 완료되었습니다.</p>
                <button onClick={()=>{props.setCommit(false);
                                props.setModal(false);
                                props.setCart([]);
                                }}>닫기</button>
            </div>
        </>
    )
}