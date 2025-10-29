import TableCommit from "../tableOrder/TableCommit"

export default function TableModal(props){
    return(
        <>      
                <div className="modal">
                    <p>장바구니</p>
                    <ul>
                        {props.cart.map((food,index)=>(
                            <li key={food.id}>
                                <p>{food.name}</p>
                                <span>{food.price}원x<strong>{food.quantity}</strong>개</span>
                                <em>{(food.quantity*food.price).toLocaleString()}원</em>
                                <div className="modalqaunBtn">
                                    <button onClick={()=>props.minus(index)}>-</button>
                                    <button onClick={()=>props.plus(index)}>+</button>
                                    <button className="delcart" onClick={()=>props.dele(index)}>삭제</button>
                                </div>
                                <hr></hr>
                            </li>
                        ))}
                    </ul>

                    <div className="modalBtnBox">
                        <button className="close" type="button" onClick={()=>props.setModal(false)}>닫기</button>
                        <button className="commit" type="button" onClick={()=>props.setCommit(true)}>주문하기</button>
                    </div>
                    
                </div>
                {props.commit && <TableCommit
                            commit={props.commit}
                            setCommit = {props.setCommit}
                            cart={props.cart}
                            setModal={props.setModal}
                            setCart={props.setCart}/>}
        </>
    )
}