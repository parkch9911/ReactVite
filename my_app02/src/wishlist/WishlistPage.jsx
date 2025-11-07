// 여긴 찜목록 보기
import { useContext } from "react";
import { WishlistContext } from "./WishlistContext";

export default function WishListPage(){
    const {wishlist,removeFromWishlist,clearWishlist}=useContext(WishlistContext)
    console.log()
    return(
        <div>
            <h2>찜한 상품 목록</h2>
            {wishlist.length===0? 
                (<p>아직 찜한 상품이 없습니다.</p>):(
             <ul>
                {wishlist.map((item)=>(
                    <li key={item.id}>
                        {item.name}-{item.price}
                        <button type="button" onClick={()=>removeFromWishlist(item.id)}>삭제</button>
                    </li>
                ))}
                <button onClick={clearWishlist}>찜 전체 삭제</button>
             </ul>)
            }
        </div>
    )
}