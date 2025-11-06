import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'
import { useContext } from "react";
import { FoodjangContext } from "../../foodjangContext/FoodjangContext";

export default function MealsNew({data}){

    const dataCopy = [...data]
    const newfilter = dataCopy.filter((val)=>val.id % 2 == 0)
    const {addwish,removewish,isinwish}=useContext(FoodjangContext)
    
    return(
        <div>
            <h2>새로운 레시피</h2>
            <ul>
                {newfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image} /></Link>
                    <p>🆕 {item.name}</p>
                    <button className="wishbtn" onClick={()=>{isinwish(item.id)?removewish(item.id):addwish(item)}}>{isinwish(item.id)?'♥':'♡'}</button>
                </li>
                ))}
            </ul>
        </div>
    )
}