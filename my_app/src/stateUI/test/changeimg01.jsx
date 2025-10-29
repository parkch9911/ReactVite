import { useState } from "react";

export default function Changeimg01(){
    const [img,setImg]=useState(false)

    return(
        <>
            <div >
                <img src={img? '/images/pome.png':'/images/poodle.png'} alt="dog"/>
             </div>
            <button onClick={()=>setImg(!img)}>이미지 변경</button>
        </>
    )
}