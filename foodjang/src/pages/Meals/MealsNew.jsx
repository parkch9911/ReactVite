import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'

export default function MealsNew({data}){

    const dataCopy = [...data]
    const newfilter = dataCopy.filter((val)=>val.id % 2 == 0)
    
    return(
        <div>
            <h2>새로운 레시피</h2>
            <ul>
                {newfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image} /></Link>
                    <p>🆕 {item.name}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}