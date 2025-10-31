import { useEffect,useState } from "react";
import ProductList from "../ExJ06/ProductList";
import './ProductApp.css'

export default function ProductApp(){
    const[data,setData] = useState([])
//JSON용
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/photos')
.then((res)=>{
    if(!res.ok){
        throw new Error(res.status)
    }
    return res.json()
})
.then((get)=>{
    setData(get)
})
.catch((err)=>{
    setErrMsg(err.message)
})
.finally(()=>{
    console.log('요청완료')
})
},[])

return(
    <>
    <h1>상품목록</h1>
        <ProductList data={data}/>
    </>
)
}