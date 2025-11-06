//위시리스트 헤더
import { useContext } from "react";
import { WishlistContext } from "./WishListContext";
import {Link} from 'react-router-dom';

export default function WishListHeader(){

    const {changeShow,showBtn}=useContext(WishlistContext)
  
    return(
            <div>
                <h1 style={{display:'inline-block'}}>찜하기 예제</h1>
                <Link to={showBtn? '/wishlist':'/'} onClick={changeShow}>{showBtn?'찜 목록보기':'상품 보기'}</Link>
            </div>
            

    )
    
}