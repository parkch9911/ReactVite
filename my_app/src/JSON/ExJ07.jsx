import { useEffect,useState } from "react";

export default function ExJ07(){
const[data,setData] = useState([])
useEffect(()=>{
fetch('https://fakestoreapi.com/products')
.then((res)=>{
    if(!res.ok){
        throw new Error(res.status)
    }
    return res.json()
})
.then((getdata)=>{
    setData(getdata)
    console.log(getdata)
})
.catch((err)=>{
    setErrMsg(err.message)
})
.finally(()=>{
    console.log('요청완료')
})
},[])

// 기본값 담을 상태변수 category
const [list,setList]=useState(`men's clothing`)
// 평점탭 조건 걸기용
const [listrate,setListrate]=useState(false)

// 카테고리 필터
const changeTab = data.filter((val)=>val.category === list)
console.log(changeTab) // 잘 걸러짐
// 평점 필터
const rateTab = data.filter((val)=>val.rating.rate > 0)
console.log(rateTab) // 빈배열로 반환 이거 배웟는데 

    return(
        <>
            <div className="all"
            style={{backgroundColor:'white',
                width:'1000px',
                height:'1200px',
                overflow:'scroll'
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
                    {(listrate? rateTab:changeTab).map((item)=>(
                        <li key={item.id} style={{width:'150px'}}>
                            <img style={{width:'150px',
                            height:'200px',
                                backgroundColor:'white',
                            }} src={item.image}/>
                            <p>{item.title}</p>
                            <p style={{marginTop:'10px',
                                fontWeight:'700'
                            }}>{item.price} $</p>
                        </li>
                    ))}
    
                    </ul>
                </div>
            </div>
            
        </>
    )
}