import { Link } from "react-router-dom";
import './Meals.css'
import { useContext } from "react";
import { FoodjangContext } from "../../foodjangContext/FoodjangContext";

export default function MealsAll({data}){

    const dataCopy = [...data]
    const allfilter = dataCopy.filter((val)=>val.id > 0)
    const {addwish,removewish,isinwish}=useContext(FoodjangContext)

    return(
        <div>
            <h2>전체 레시피</h2>
            <ul>
                {allfilter.map((item)=>(
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