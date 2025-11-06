// 여긴 상품 목록 나오는곳 찜버튼잇게
import { useContext, useEffect } from "react";
import { WishlistContext } from "./WishListContext";

    //상품리스트 여기에 만들지 context에만들지 모르겟는데 일단 만들어보기
    const products = [
        { id: 1, name: '노트북', price: 1500000 },
        { id: 2, name: '마우스', price: 30000 },
        { id: 3, name: '키보드', price: 80000 },
        ];

export default function ProductList(){
    const { wishlist,addToWishlist,removeFromWishlist,isinWishlist }=useContext(WishlistContext)

    return(
        <div style={{padding:"20px"}}>
            <h2>상품 목록</h2>
            <ul>
            {products.map((item)=>(
                <li key={item.id}>
                    {item.name}-{item.price.toLocaleString()}원
                    <button type="button" 
                        //현재 상품이 찜 목록에 존재하는지 존재=참 없으면=거짓
                         onClick={()=>{isinWishlist(item.id)? removeFromWishlist(item.id):addToWishlist(item)}}>
                        
                            {isinWishlist(item.id)?'찜 취소':'찜 하기'}
                    </button>
                </li>
            ))}
            </ul>
            <hr/>
            <p>현재 찜 한 상품 수 : {wishlist.length}</p>
        </div>
    )
    
}