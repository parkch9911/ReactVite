import { useContext } from "react";
import { FoodjangContext } from '../../foodjangContext/FoodjangContext'
import { Link } from "react-router-dom";
import './Wish.css'

export default function Wish({data}){
   //여기서 제이슨데이터랑 wish리스트랑 필터 돌려서 같은것만 찾는 변수를 또 하나 넣어서 맵을 돌려야하나요
    const {wishRecipes,removewish}=useContext(FoodjangContext)

    return(

        <div>
            <h2>나의 즐겨찾는 레시피</h2>
            <div>
                {wishRecipes.length===0?
                <div className="ifno">
                    <p className="nowish">아직 즐겨찾기 레시피가 없습니다.</p>
                    <Link to='/' className="backtorec">레시피 담으러 가기</Link>
                </div>
                :
                <div>
                    <ul>
                        {wishRecipes.map((item)=>(
                            <li key={item.id}>
                                <img src={item.image}/>
                                <p>{item.name}</p>
                                <Link to={`/detail/${item.id}`} className="wishdetail">레시피 상세보기</Link>
                                <button className="delwish" onClick={()=>removewish(item.id)}>삭제</button>
                            </li>
                        ))}
                    </ul> 
                    <Link to='/' className="backto">더 담으러 가기</Link>
                </div>   
                
            }
            </div>
        </div>
    )

}