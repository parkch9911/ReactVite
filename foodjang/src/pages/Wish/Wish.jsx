import { useContext } from "react";
import { FoodjangContext } from '../../foodjangContext/FoodjangContext'
import { Link } from "react-router-dom";
import './Wish.css'
import { useState } from "react";

export default function Wish({data}){
   //여기서 제이슨데이터랑 wish리스트랑 필터 돌려서 같은것만 찾는 변수를 또 하나 넣어서 맵을 돌려야하나요
    const {wishRecipes,setWishRecipes,removewish}=useContext(FoodjangContext)
    //진짜 삭제할거냐고 묻는
    const [deleAll,setDeleAll]=useState(false)
    const yesiam = ()=>{
        setDeleAll(!deleAll)
        setWishRecipes([])
    }   
    const noiamnot = ()=>{
        setDeleAll(!deleAll)
    }

    return(

        <div>
            <h2>나의 즐겨찾는 레시피</h2>
            <div>
                {wishRecipes.length===0?
                <div className="ifno">
                    <p className="nowish">아직 즐겨찾기 레시피가 없습니다.</p>
                    <Link to='/all' className="backtorec">레시피 담으러 가기</Link>
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
                    <Link to='/all' className="backto">더 담으러 가기</Link>
                    <button className="delallwish" onClick={()=>setDeleAll(!deleAll)}>레시피 전체 삭제</button>
                    {deleAll && 
                        <div className="deloverlay">
                        <div className="realDel">
                            <p>즐겨찾는 레시피를 모두 삭제하시겠습니까?</p>
                            <div className="delbtnbox">
                                <button type="button" className="yesbtn" onClick={yesiam}>예</button>
                                <button type="button" className="nobtn" onClick={noiamnot}>아니오</button>
                            </div>
                        </div>
                        </div>
                        }
                </div>   
                
            }
            </div>
        </div>
    )

}