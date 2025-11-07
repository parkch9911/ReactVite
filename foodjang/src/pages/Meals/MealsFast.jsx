import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'
import { useContext } from "react";
import { FoodjangContext } from "../../foodjangContext/FoodjangContext";

export default function MealsFast({data}){

    const dataCopy = [...data]
    const fastfilter = dataCopy.filter((val)=>val.prepTimeMinutes < 20)
    const {addwish,removewish,isinwish}=useContext(FoodjangContext)

    return(

        <div>
            <h2>빠른조리</h2>
            <ul>
                {fastfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image}/></Link>
                    <p>{item.name}</p>
                    <button className="wishbtn" onClick={()=>{isinwish(item.id)?removewish(item.id):addwish(item)}}>{isinwish(item.id)?'❤️':'🤍'}</button>
                </li>
                ))}
            </ul>
        </div>
    )
}