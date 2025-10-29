import { useState } from "react";

export default function Changeimg02(){
    
    const [index,setIndex]=useState(0)
    const imgs = ['/images/coffee-gray.jpg',
                  '/images/coffee-blue.jpg',
                  '/images/coffee-pink.jpg',
                ];
    //인덱스 번호가 2가되면 다시 0으로 순환하는 함수 작성
    const ChIndex = ()=>{
        // if(index < imgs.length-1){
        //     setIndex(index+1)
        // }else{setIndex(0)}
        //index가 0 이면 1/3 => 1 , 1이면 2/3 =2, 2면 3/3= 0
        setIndex((index+1)%imgs.length)
    }

    return(
        <>
            <div>
                <img src={imgs[index]} alt="coffee" 
                onClick={()=>setIndex(ChIndex)}/>
            </div>
        </>
    )
}