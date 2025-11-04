import { useState,useEffect } from "react";

export default function useMeals(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://dummyjson.com/recipes`)
        .then((res)=>{
            return res.json()
        })
        .then((getdata)=>{
            setData(getdata.recipes)
        })
    },[])

    return data;
}