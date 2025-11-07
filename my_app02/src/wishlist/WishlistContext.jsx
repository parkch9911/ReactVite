import { createContext, useEffect } from "react";
import { useState } from "react";

//저장소만들기
//생성자 함수
export const WishlistContext = createContext();

//provider 공유할거 이 함수 안에
export default function WishlistProvider({children}){


    //찜 목록 받아와야하니까 빈배열로 만들기
    //찜한 항목을 저장할 상태변수 정의
    const [wishlist,setWishlist]=useState(()=>{
        const saved = localStorage.getItem('wishlist');
        return saved ? JSON.parse(saved) : []
    })
    // 저장된 찜 목록이 있으면 복원, 없으면 빈 배열 반환


    // 1. Local Storage에서 최초 렌더시 1회만 불러오기
    // useEffect 이용해서 작성
    // useEffect(()=>{
    //     const saved = localStorage.getItem('wishlist')
    //     if(saved){
    //         setWishlist(JSON.parse(saved)) // 상태 갱신
    //     }
    // },[])
    // ========useEffect에서는 return은 cleanup 함수이기때문에 삭제될 수 있어서 if사용했다.

    // 2. wishlist가 바뀔 때 마다 Localstorage에 저장이 되어야함
    useEffect(()=>{
        localStorage.setItem('wishlist',JSON.stringify(wishlist))
    },[wishlist])

    // 찜한 상품이 찜목에 추가 하는 함수
    //이미 같은 id를 가진 상품이 존재하면 중복 추가 안됨
    //존재 유무를 확인해야함
    const addToWishlist=(product)=>{
        console.log('추가')
        //중복을 피하기위해 같은 id가 존재하는지 유무
        //확인 => 배열.find() 이용
        //배열.find()=> 찾는 항목이 존재하면 오브젝트 배열 출력,
        //              없다면 undefinded
        const listFind = wishlist.find((item)=> item.id === product.id)
        //listFind에 같은 id가 존재하면 찜에 추가불가
        if(listFind === undefined){
            //찜 항목에 추가
            let listCopy =[...wishlist]
            // 내가 선택한 항목 {id: ~, name: ~ ..}
            listCopy.push(product)
            //업데이트
            setWishlist(listCopy)
            console.log(listFind)
        }
        console.log(listFind)
        console.log(wishlist)
    }

    //찜 제거 하는 함수
    //filter를 이용해서 id가 다른 항목만 남겨서
    //업데이트 하는 기능을 사용함
    const removeFromWishlist=(id)=>{
        setWishlist(wishlist.filter((item)=> item.id !== id))
        console.log('취소')
    }

    //큰 의미는 없지만  localStorage 통째로 삭제
    const clearWishlist = ()=>{
        setWishlist([])
        localStorage.removeItem('wishlist')
    }


    //이미 찜 된 항목인지 확인하는 함수
    //해당 id의 상품객체가 존재하면 true, 없으면 false 반환
    //find()함수 이용
    const isinWishlist=(id)=>{
        //wishlist 배열에서 id가 일치하는 상품을 찾는다
        const findItem = wishlist.find((item)=>item.id === id)
        //찾는 상품이 존재하면 findItem은 객체(Object)
        //없으면 undefined
        console.log(findItem)
        if(findItem !== undefined){ //id가 존재하면
            //이미 찜 되어 있으면 => true 반환
            return true;
        }else{
            //상품이 없음 => false 반환
            return false;
        }
    }
    
    //찜목록상품목록 버튼 상태 기본값 참
    const [showBtn,setShowBtn]=useState(true)
    const changeShow=()=>{
        setShowBtn(!showBtn)
    }

    return(
        <WishlistContext.Provider value={{
            wishlist,
            showBtn,
            changeShow,
            addToWishlist,
            removeFromWishlist,
            isinWishlist,
            clearWishlist
            }}>

            {children}

        </WishlistContext.Provider>
    )
}
