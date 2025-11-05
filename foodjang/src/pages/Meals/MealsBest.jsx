import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'
export default function MealsBest({data}){

    const dataCopy = [...data]
    const bestfilter = dataCopy.filter((val)=>val.rating > 4.6)

    return(

        <div>
            <h2>베스트 레시피</h2>
            <ul>
                {bestfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image}/></Link>
                    <p>❤ {item.name}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}