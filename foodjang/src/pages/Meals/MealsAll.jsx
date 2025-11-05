import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'

export default function MealsAll({data}){

    const dataCopy = [...data]
    const allfilter = dataCopy.filter((val)=>val.id > 0)

    return(
        <div>
            <h2>전체 레시피</h2>
            <ul>
                {allfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image}/></Link>
                    <p>{item.name}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}