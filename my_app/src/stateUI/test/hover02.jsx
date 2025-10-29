import { useState } from "react";

export default function Hover02(){

    //isTooltip = false면 툴팁 안보이게
    const[isTooltip, setIsTooltip]=useState(false)
    return(
       <>
            <div>
                <button type="button"
                onMouseEnter={()=>setIsTooltip(true)}
                onMouseLeave={()=>setIsTooltip(false)}
                >마우스를 올려보세요</button>
                {isTooltip && <div>도움말 메시지</div>} 
            </div>
       </>
    )
    // {isTolltip && <div>도움말 메시지</div>} 
    // isTooltip의 논리값을 공유한다는 뜻인거같음. false면 false ...
}