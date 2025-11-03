import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


//custom 훅  -> 훅을 제조해서 만든 훅 useProduct}()
//커스텀 훅 안에 useState, useEffect, fetch() 만으로 구성된 함수 

export default function useProduct(){
    const [data,setData] = useState([])

useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then((res)=>{
    return res.json()
    })
    .then((getdata)=>{
    setData(getdata)
    })
},[])
    return data;
}
//여기서 data fetch해서 리턴으로 값 보냄. 

//    return data;
//    useProduct = data
//    data = useProduct()


// 커스텀 훅? 일단 여기 useProduct()   소문자로 넣음