import { Link,useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import './Home.css'

export default function Home({data}){


const dataCopy = [...data]



//메인화면1번 출력용 필터
//평점 필터
const homefilter1 = dataCopy.filter((val)=>val.rating > 4.8)
//메인화면 2번 출력용 필터
//리뷰 필터
const homefilter2 = dataCopy.filter((val)=>val.reviewCount > 90)


console.log(homefilter1)
console.log(homefilter2)



    return(
        <>
            <img className="banner" src="../public/img/foodjangbanner.JPG"/>
            <div className="section">
                <div className="home-food">
                <h2>그린의 추천 레시피</h2>
                    <ul>
                        {homefilter1.map((item)=>(
                            <li key={item.id}>
                               <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}> <img alt={item.name} src={item.image} className="home-img"/></Link>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    <hr/>
                </div>
                 <div className="home-food2">
                    <h2>리뷰 많은 레시피</h2>
                    <ul>
                        {homefilter2.map((item)=>(
                            <li key={item.id}>
                                <Link to={`/detail/${item.id}`} onClick={()=>window.scrollTo(0,0)}> <img alt={item.name} src={item.image} className="home-img"/></Link>
                                <p>{item.name}</p>
                            </li>
                        ))}
                    </ul>
                    <hr/>
                </div>

            </div>
        </>
    )
}