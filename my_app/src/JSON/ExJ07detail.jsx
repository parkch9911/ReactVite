import { useParams,Link } from "react-router-dom";
import { useState,useEffect } from "react";

//props => ffff(props)
//구조 분해 할당 => 변수로 대입해서 할당을 다시 한다.
//반드시 구조분해 할당은 {data} 처럼 중괄호 안에 입력한다.  

export default function ExJ07detail({data}){
const {id} = useParams()
//JSON데이터 저장할 상태변수
// const[data,setData] = useState(null);

//지금 현재 받아온 useParams() 받아온 id가 props로 받은 data와 같은id가 
//존재하는지 찾아야한다. 
const product = data.find((item)=> item.id === Number(id))
//숫자라고 표기 안해주면 문자인지 숫자인지 구분 못함

    //React에서의 코드 표현 방식
    // ! = not = 부정 !data ===  ! == null 
    // if(!data) return <p>데이터 불러오는 중....</p>
    



    return(
        <>
            {product &&
            <div style={{backgroundColor:'white',
                padding:'20px',
                borderRadius:'10px'
            }}>
                <h1>Detail</h1>
                <h2>{product.title}</h2>
                <img src={product.image} alt={product.title} style={{width:'200px'}}/>
                <p>category:{product.category}</p>
                <p>price:{product.price}$</p>
                <p>rate:{product.rating.rate}</p>
                <p>{product.description}</p>
                <Link to='/' style={{backgroundColor:'dodgerblue',
                    padding:'5px 10px',
                    color:'white',
                    borderRadius:'10px',
                    display:'inline-block',
                    fontSize:'20px',
                    marginTop:'20px'
                }}>Back to Prev</Link>

            </div>
            }
        </>
    )
}