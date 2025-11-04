import { useState,useEffect } from "react";

export default function useRecipes(){


    const [data,setData] = useState([])
    // JSON 데이터 30개  => 배열
    // JSON  {id:1, name:'A'}
    // 그래서 오브젝트안에 오브젝트를 담을수가없어서, 배열형식으로 담아준다.
    //[{id:1, name:'A'},
    //{id:2, name:'B'}]


//배열 가져올거니까 data만들고 기본값 []

useEffect(()=>{
    
    fetch(`https://dummyjson.com/recipes`)
    .then((res)=>{
    return res.json()
    })
    .then((getdata)=>{
    setData(getdata.recipes)
    })
},[])
    return data;
}

// 레시피 사이트에 잇는 정보를 setData로 담고 
// 그걸 data에 집어넣어서 밖에서 사용할 수 있게 리턴, 
// 이제 app에서 저걸 다시 data에 집어넣고 라우터에 넣어서 가져가면 
// 해당 jsx에서 data값 호출해서 사용가능