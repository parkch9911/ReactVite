import { Link, useParams } from "react-router-dom";

export default function RecipesDetail({data}){
    //유즈파람으로 일단 id값 받아오기
const {id} =useParams()

const item = data.find((item)=>item.id ===Number(id))

    return(
        <>
            {item &&
            <div className="res-detail-wrap">
                <h1>Recipe Details</h1>
                <p>{item.name}</p>
                <img src={item.image} alt={item.name}/>
                <p>cuisine : {item.cuisine}</p>
                <p>difficulty : {item.difficulty}</p>
                <p>cookTime : {item.cookTimeMinutes}Min</p>
                <span>rating : ({item.rating})<em> / {item.reviewCount}</em></span>
                <h3>How To Cook</h3>
                <h4>{item.instructions}</h4>
                <ul>
                    {item.instructions.map((food)=>(
                        <li key={food.index}>
                            {food.instructions}
                        </li>
                    ))}
                </ul>
                <Link to='/'>Prev</Link>
            </div>
            }
        </>
    )
}