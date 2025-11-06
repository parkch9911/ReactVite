import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import useMeals from "../api/MealsData";

export const FoodjangContext = createContext();

export default function FoodjangProvider({children}){
    const data = useMeals();
    //빈배열
    const [wishRecipes,setWishRecipes]=useState([]);

    //찜목록 추가하는함수
    const addwish = (food)=>{
        //찾으려는거 ( 빈배열에 있는 아이템의 id랑 내가 선택한 항목의 id가 같은거)
        const wishFind = wishRecipes.find((item)=>item.id === food.id)
        let wishCopy =[...wishRecipes]
        //만약에 내가 선택한 항목이 배열에 없다면 push 하기
        if(wishFind === undefined){
            wishCopy.push(food)
        }
        setWishRecipes(wishCopy)
        console.log(wishRecipes)
    }

    //찜목록 삭제하는 함수
    const removewish = (id)=>{
        setWishRecipes(wishRecipes.filter((item)=>item.id !== id))
        console.log(wishRecipes)
    }

    // 찜 목록이 이미 있는지 보는 함수
    const isinwish = (id)=>{
        const findWish = wishRecipes.find((item)=>item.id === id)
        if(findWish === undefined){
            return false;
            //(아직 없으면)안찾아지면 false
            //(이미 존재하면)찾아지면 true
        }else{
            return true;
        }
        
    }

    return(
        <FoodjangContext.Provider value={{wishRecipes,addwish,removewish,isinwish,data}}>
            {children}
        </FoodjangContext.Provider>

    )





}