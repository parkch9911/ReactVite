import TableModal from "../tableOrder/TableModal"

export default function TableList(props){
    return(
        <>
            <div className="contain-table" >
                <div className="tabBox">
                    <h3>🍴테이블 No.13</h3>
                    <button className="tabBtn" onClick={()=>props.setBest(true)}>인기 메뉴</button>
                    <button className="tabBtn" onClick={()=>{props.setTab(1);props.setBest(false);}}>식사 메뉴</button>
                    <button className="tabBtn" onClick={()=>{props.setTab(2);props.setBest(false);}}>안주 메뉴</button>
                    <button className="tabBtn" onClick={()=>{props.setTab(3);props.setBest(false);}}>주류 메뉴</button>
                    <button className="cartBtn"onClick={()=>props.setModal(true)} >주문내역</button>
                </div>
                <div className="foodBox">
                    <ul className="foodul">
                        {(props.best? props.bestTab:props.changeTab).map((food)=>(
                        <li  key={food.id} className="foodli" 
                        onClick={()=>props.addcart(food)}>
                            <img className="foodimg" src={'/tableimg/'+food.img+'.jpg'}/>
                            <p>{food.name}</p>
                            <span>{food.dep}</span>
                            <strong>{food.price.toLocaleString()}원</strong>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="modal-contain">
                    {props.modal && <TableModal
                    modal={props.modal}
                    setModal={props.setModal}
                    cart={props.cart}
                    commit={props.commit}
                    setCommit ={props.setCommit}
                    plus={props.plus}
                    minus={props.minus}
                    dele={props.dele}
                    setCart={props.setCart}
                    total={props.total}
                    />}
                </div>
            </div>
        </>
    )
    // 모달한테 넘겨줄거 
    // 일단 modal -false 가져와서 논리값으로 상태변화 
    // 셋모달 넘겨줘서 모달에 있는 닫기 버튼 누르면 다시 사라지게
    // 복사한 배열 넘겨줘야하니까 부모에서 받아온 cart 다시 넘겨주기
}