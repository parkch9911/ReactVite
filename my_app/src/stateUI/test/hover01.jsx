import { useState } from "react";

export default function Hover01(){

    //isHovered = false 면 hover 안된상태
    const[ isHovered, setIsHovered]=useState(false)
    return(
        <div
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
            style={{backgroundColor:isHovered? 'dodgerblue':'gray',
                padding:'20px',
                cursor:'pointer',
                color:isHovered? 'white':'black'
            }}
        >
            호버하면 색이 변합니다.
        </div>
    )
}