import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'
import { useContext } from "react";
import { FoodjangContext } from "../../foodjangContext/FoodjangContext";
export default function MealsBest({data}){

    const dataCopy = [...data]
    const bestfilter = dataCopy.filter((val)=>val.rating > 4.6)
    const {addwish,removewish,isinwish}=useContext(FoodjangContext)
    return(

        <div>
            <h2>베스트 레시피</h2>
            <ul>
                {bestfilter.map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image}/></Link>
                    <p>{item.name}</p>
                    <button className="wishbtn" onClick={()=>{isinwish(item.id)?removewish(item.id):addwish(item)}}>{isinwish(item.id)?'♥':'♡'}</button>
                </li>
                ))}
            </ul>
        </div>
    )
}