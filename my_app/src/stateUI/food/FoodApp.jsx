import { useState } from "react";
import FoodList from "../food/FoodList";
import CartModal from "../food/CartModal";


export default function FoodApp(){

    //기본값
    const [foods] = useState([
        {id:1, name:'🍗Chicken',price:12000},
        {id:2, name:'🍕Pizza',price:15000},
        {id:3, name:'🍔Hamberger',price:8000},
        {id:4, name:'🥤Coke',price:2500},
    ]);
    //빈 배열 
    const [cart,setCart] = useState([])
    //모달 띄울 상태 기본값은 false
    const [showCart,setShowCart] = useState(false)

    //장바구니 추가 
    //빈배열 카트 얕은 복사
    //값이 존재하는지 여부 판단하기 위해서 findcheck로 변수 넣어두기
    //비교값이 없으면 어차피 push,  선행되는 의미보다는 비교의 우선순위
    const addCart = (food)=>{
        let cartCopy = [...cart]
        let findCheck = false;
        console.log(`여기: ${food.id}`)
        for(let i=0; i<cart.length; i++){
            if(food.id === cartCopy[i].id){
                cartCopy[i].quantity += 1;
                findCheck = true;
                break;
            }
        }
        if(!findCheck){
            cartCopy.push({
                id:food.id,
                name:food.name,
                price:food.price,
                quantity:1
            })
        }
        setCart(cartCopy);
    }

    const minus = ()=>{
        if(cartCopy.quantity > 0){
            cartCopy[i].quantity+= -1;
        }
    }

    const plus = ()=>{
        if(cartCopy.quantity < 11 ){
            cartCopy[i].quantity+= 1;
        }
    }


    return(
        <>
            <h2>🥘Order FOODS!</h2>
            <button style={{backgroundColor:'orange',
                            color:'white'
            }} type="button" onClick={()=>setShowCart(true)}>My Cart</button>
            <FoodList foods={foods} addCart={addCart}/>
            {showCart === true ? <CartModal cart={cart} minus={minus} plus={plus} onClose={()=>setShowCart(false)}/>: null}
        </>
    )
}
// 제목이랑 버튼 넣고
//푸드 리스트에는 그냥 밑에 상품 목록 출력하기
// 그리고 모달에서는 장바구니 보여주기