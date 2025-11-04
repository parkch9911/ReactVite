import { Link,useParams } from "react-router-dom";
import './Meals.css'

export default function MealsDetail({data}){

const{id} = useParams()
const item = data.find((item)=>item.id === Number(id))
//map을 안돌려도 useParams로 해당 id값을 받아올수있음
    return(

        <>
            {item &&
            <div className="detail-wrap">
                <div className="detail-left">
                    <img src={item.image} alt={item.name}/>
                    <p>{item.name}</p>
                </div>
                <div className="detail-right">
                    <p>난이도 : {item.difficulty}</p>
                    <p>요리법 : {item.cuisine}</p>
                    <p>칼로리 : {item.caloriesPerServing}kcal</p>
                    <p>재료 : {item.ingredients}</p>
                    <p>조리방법 : {item.instructions}</p>
                </div>
            </div>
            }
            <Link to='/' className="backtohome">메인 화면으로 돌아가기</Link>
        </>
    )
}