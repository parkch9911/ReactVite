import React,{useState} from "react";
import './ShoppingList.css'

export default function Shopping(){

const [product, setProduct] = useState([
                { id:0, name:'우유', done: false },
                { id:1, name:'계란', done: false },])
const [inputval,setInputval] = useState('')
// const [toggle,setToggle] = useState('구매완료')
// 배열 추가하는 함수
const addproduct = ()=>{
    let productCopy = [...product]
    productCopy.unshift({id:product.length, name:inputval,done: false})
    setProduct(productCopy)
}
// 배열 삭제하는 함수
const delproduct =(index)=>{
    let productCopy = [...product]
    productCopy.splice(index,1)
    setProduct(productCopy)
}
const change =(index)=>{
    let productCopy = [...product]
    productCopy[index].done = !(productCopy[index].done)
    setProduct(productCopy)
    console.log(productCopy[index].done)
}
// 배열 구매완료,취소 토글 함수

// 밸류값이 트루 일 때 버튼이 취소 로 변하고 상품목록에 텍스트데코//
// 밑에서 어떻게 이너텍스트랑 스타일이랑 클래스네임을 주는가.
// 클래스 네임을 줘도 배열의 name 밸류의 스타일에 따로 접근 어케하지

    return(
        <>
            <div className="shopinput">
                <h3>🛒쇼핑 리스트</h3>
                <input placeholder="물건 이름 입력" onChange={(e)=>{setInputval(e.target.value)}} value={inputval}></input>
                <button onClick={addproduct}>추가</button>
            </div>
            <div className="shoplist">
                {product.map((item,index)=>(
                    <div key={index} className="shoplistline" style={{border:'1px solid black'}}>
                        {/* 이거 밑에도 스타일을 false물어봐서 해야함 */}
                        <span className="shopspan" style={{textDecoration: item.done?'line-through':'none'}}>{item.name}</span>
                        <button onClick={()=>change(index)}>{item.done?'취소':'구매완료'}</button>
                        <button onClick={()=>{delproduct(index)}}>삭제</button>
                    </div>
                    //false면 none 이고 구매완료
                    //true면 라인 , '취소'
                ))}
            </div>

        </>
    )
}