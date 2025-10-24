import {useState} from "react";

// React에서는 화면 상태도 데이터로 관리한다.
export default function ModalChange(){

    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <div>
                <button onClick={()=>{setIsOpen(true)}}>모달열기</button>
                {isOpen && <div>모달 내용</div>}
                {isOpen && <button onClick={()=>{setIsOpen(false)}}>닫기</button>}
            </div>
        </>
    )
}
