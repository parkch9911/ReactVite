import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import ExJ07detail from "./ExJ07detail";

export default function ExJ07({data}){
// const[data,setData] = useState([])

// 기본값 담을 상태변수 category
const [list,setList]=useState(`men's clothing`)
// 평점탭 조건 걸기용
const [listrate,setListrate]=useState(false)

// 카테고리 필터
const changeTab = data.filter((val)=>val.category === list)
console.log(changeTab) // 잘 걸러짐
// 평점 필터
const rateTab = data.filter((val)=>val.rating.rate > 0)
// rateTab 이용해서 sort로 내림차순해야함
//sort((a,b)=> a-b)   --- 이건 오른차순 정렬
//sort((a,b)=> b-a)   --- 이건 내림차순 정렬
const rateCopy = [...data]
const rateSort = rateCopy.sort((a,b)=> b.rating.rate - a.rating.rate)

// 
console.log("여기까지")
console.log(rateTab)
console.log(rateSort) // sort 값 제대로출력됨.


    return(
        <>
            <div className="all"
            style={{backgroundColor:'white',
                width:'1000px',
                height:'1200px',
                overflow:'scroll',
                borderLeft:'20px solid gray'
            }}>
                <div className="btnwrap"
                style={{backgroundColor:"gray",
                    paddingTop:'20px'
                    }}>
                    <button onClick={()=>{setList(`men's clothing`);setListrate(false);}}
                    style={{borderRadius:'10px 10px 0 0',
                        width:'150px'
                    }}>Men's</button>

                    <button onClick={()=>{setList(`women's clothing`);setListrate(false);}}
                    style={{borderRadius:'10px 10px 0 0',
                        width:'150px'
                    }}>Women's</button>

                    <button onClick={()=>{setList(`electronics`);setListrate(false)}}
                    style={{borderRadius:'10px 10px 0 0',
                        width:'150px'
                    }}>Electronics</button>

                    <button onClick={()=>{setList(`jewelery`);setListrate(false);}}
                    style={{borderRadius:'10px 10px 0 0',
                        width:'150px'
                    }}>Jewelery</button>

                    <button onClick={()=>setListrate(true)}
                    style={{borderRadius:'10px 10px 0 0',
                        width:'150px'
                    }}>Rating</button>

                </div>
                <div className="prowrap">
                    <ul style={{display:'flex',
                        flexWrap:'wrap',
                        gap:'60px',
                        padding:'50px',
                        marginLeft:'60px',
                        listStyle:'none'
    
                    }}>
                 
                        {/* 평점순에 내림차순만 넣으면 해결  */}
                    {(listrate? rateSort:changeTab).map((item)=>(
                        <li key={item.id} style={{width:'150px'}}>
                            <img style={{width:'150px',
                            height:'200px',
                                backgroundColor:'white',
                            }} src={item.image}/>
                            <p>{item.title}</p>
                            <p style={{marginTop:'10px',
                                fontWeight:'700'
                            }}>{item.price} $</p>
                            <Link to = {`/detail/${item.id}`}>
                            상세보기 
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>    
        </>
    )
}