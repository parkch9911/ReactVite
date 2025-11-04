import { useState } from "react";
import { Link } from "react-router-dom";
import './Recipes.css'

export default function RecipesList({data}){
//일단 app에서 가져오는 배열 = data
// console.log(data) //일단 App에서 data 배열 잘 가져와짐.
//기본값 담을 상태변수 - 전체보여주기
const [basicList,setBasicList]=useState(true)
//음식 카테고리? 라고해야하나 에 따른 탭 비교위한 상태변수
const [cuisine,setCuisine]=useState(false)
//레이팅 비교할 상태변수
const [rateList,setRateList]=useState(false)
//기본값 전체 보여주기 필터? 
// 이러면 기본값으로 basicList가 true면 basicTab맵   
// 다른 나라별 카테고리 누르면 basicTab false되고 cuisine true 되고 map돌리기
// 레이팅 버튼 누르면 rateList true되고 map 돌리기 
// 다른 버튼 온클릭하면 자기거 말고 다른 두개에 false주기

//필터하려고 얕은복사
const dataCopy = [...data]
//기본 초기값 필터
const basicTab = dataCopy.filter((val)=>val.rating > 0)
//나라 별 음식 필터
const cuisineTab = dataCopy.filter((val)=>val.cuisine === cuisine)
//레이팅 음식 필터
const rateSortDown = dataCopy.sort((a,b)=> b.rating - a.rating)
//위에 레이팅은 전체보기랑 같이 다 보여주는데 sort할거니까 일단 필터조건 저렇게주고
// 내림차순 오름차순 둘 다 만들어서 클릭할때마다 토글되게 map기준을 바꿔주기

const btnHandler = (num)=>{
        setCuisine(true);
        setBasicList(false);
        setRateList(false);
    if(num === 1){
        setCuisine('Italian')
    }else if(num === 2){
        setCuisine('Asian')
    }else if(num === 3){
        setCuisine('American')
    }else if(num === 4){
        setCuisine('Mexican')
    }else if(num === 5){
        setCuisine('Mediterranean')
    }else if(num === 6){
        setCuisine('Pakistani')
    }else if(num === 7){
        setCuisine('Japanese')
    }else if(num === 8){
        setCuisine('Moroccan')
    }else if(num === 9){
        setCuisine('Korean')
    }else if(num === 10){
        setCuisine('Greek')
    }else if(num === 11){
        setCuisine('Thai')
    }else if(num === 12){
        setCuisine('Indian')
    }else if(num === 13){
        setCuisine('Turkish')
    }else if(num === 14){
        setCuisine('Smoothie')
    }else if(num === 15){
        setCuisine('Russian')
    }else if(num === 16){
        setCuisine('Lebanese')
    }else if(num === 17){
        setCuisine('Brazilian')
    }
}

//좋아요 출력
// like = {1:0, 2:0, 3:0 ...}
// id 음식명 좋아요
// 1   된찌    0
// 2   김찌    0 ...
// like 상태변수 
// JSON 자체가 오브젝트 이기 때문에 아래와 같이 초기화 할 수 없다.
// const [likes, setLikes]=useState(0)
// 이유는 하나의 항목만 좋아요가 0이 되기 때문에
//오브젝트에 0을 초기화하는 초기값 변수
const defaultLikes = {} // 빈 배열 또는 빈 오브젝트 undefinded 될 가능성 높음
if(data.length > 0 ){
    for(let i=0; i<data.length; i++){
        const recipe = data[i]
        //defaultLikes[1]=0
        //{id:1,좋아요:0}
        defaultLikes[recipe.id] = 0 // 각 레시피 id별로 초기값 0 세팅
    }
}

const [likes, setLikes]=useState(defaultLikes)

//좋아요 버튼 클릭 시 좋아요 1씩 증가하는 핸들러 작성
const handleLike =(id)=>{
    const likesCopy = {...likes}
    //현재 undefined 인 경우 -> undefinded + 1 => NaN 나옴
    likesCopy[id] = (likesCopy[id] !== undefined ? likesCopy[id]:0) + 1
    setLikes(likesCopy)
}


// const [likebtn,setLikebtn] = useState(0);
// let like = (index)=>{
//     let dataCopy = [...data]
//     for(let i=0; i<data.length; i++){
//         if(index[i]=== dataCopy[i]){
//             dataCopy.push({likes:0})
//             dataCopy.likes+=1;
//         }
//     }
// }

//레이트 토글을 만들어서 일단 텍스트자체는 변화줄수잇음 온클릭시 부정값 나오게해놔서 true값 그대로 가지고  토글 boolean만 변함
    return(
        <>
            <div className="res-all">
                <div className="res-btn-wrap">
                    <button onClick={()=>{setBasicList(true);setCuisine(false);setRateList(false)}}>ALL</button>
                    <button onClick={()=>btnHandler(1)}>Italian</button>
                    <button onClick={()=>btnHandler(2)}>Asian</button>
                    <button onClick={()=>btnHandler(3)}>American</button>
                    <button onClick={()=>btnHandler(4)}>Mexican</button>
                    <button onClick={()=>btnHandler(5)}>Mediterranean</button>
                    <button onClick={()=>btnHandler(6)}>Pakistani</button>
                    <button onClick={()=>btnHandler(7)}>Japanese</button>
                    <button onClick={()=>btnHandler(8)}>Moroccan</button>
                    <button onClick={()=>btnHandler(9)}>Korean</button>
                    <button onClick={()=>btnHandler(10)}>Greek</button>
                    <button onClick={()=>btnHandler(11)}>Thai</button>
                    <button onClick={()=>btnHandler(12)}>Indian</button>
                    <button onClick={()=>btnHandler(13)}>Turkish</button>
                    <button onClick={()=>btnHandler(14)}>Smoothie</button>
                    <button onClick={()=>btnHandler(15)}>Russian</button>
                    <button onClick={()=>btnHandler(16)}>Lebanese</button>
                    <button onClick={()=>btnHandler(17)}>Brazilian</button>
                    <button onClick={()=>{setRateList(true);setCuisine(false);setBasicList(false);setRateToggle(!rateToggle)}}>Rating▼</button>
                </div>
                <div className="res-list-wrap">
                    <ul>
                        {(basicList? basicTab: cuisine? cuisineTab:rateSortDown).map((item)=>( 
                        <li key={item.id}>
                            <img src={item.image}/>
                            <Link to = {`/detail/${item.id}`}>{item.name}</Link>
                            <span>cuisine : {item.cuisine}</span>
                            <p>rating : {item.rating}</p>
                            <p>Click name to Detail!</p>
                            <button className="likes" onClick={()=>handleLike(item.id)}>❤️ 좋아요 {likes[item.id]}</button>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}