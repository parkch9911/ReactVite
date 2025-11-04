import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'

export default function MealsFast({data}){

    const dataCopy = [...data]
    const fastfilter = dataCopy.filter((val)=>val.prepTimeMinutes < 20)

    return(

        <div>
            <h2>빠른조리</h2>
            <ul>
                {fastfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`}><img alt={item.name} src={item.image}/></Link>
                    <p>{item.name}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}