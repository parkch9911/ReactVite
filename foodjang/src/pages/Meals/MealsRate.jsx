import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Meals.css'

export default function MealsRate({data}){

    const [sort,setSort]=useState(true);
    const rateSortup = [...data].sort((a,b)=> b.rating-a.rating)
    const rateSortdown = [...data].sort((a,b)=> a.rating-b.rating)
    console.log(sort)
    return(

        <div>
            <div className="roll">
                <button type="button" onClick={()=>setSort(!sort)} className="sort">{sort? '낮은순서▼':'높은순서▲'}</button>
            </div>
            <h2>평점순</h2>
            <ul>
                {(sort?rateSortup:rateSortdown).map((item)=>(
                <li key={item.id}>
                    <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}><img alt={item.name} src={item.image}/></Link>
                    <p>{item.name}</p>
                    <p>⭐ {item.rating}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}