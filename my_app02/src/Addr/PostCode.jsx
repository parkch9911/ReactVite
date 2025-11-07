//설치한 react-daum-postcode 를 import해야 주소검색 사용가능
import DaumPostCode from 'react-daum-postcode'
import { useState } from 'react'
import './PostCode.css'

export default function PostCode(){
    //이거는 문자라서 초기값 ''
    const[zipcode,setZipcode]=useState('') //우편번호
    const [address,setAddress]=useState('') //주소
    
    const [isOpen,setIsOpen]=useState(false); // 검색버튼 누르기 전



    const completeHandler = (data)=>{
        // 우편번호 검색을 도로명 또는 지번으로 입력 할 예정
        let arr = ''
        if(data.userSelectedType === 'R'){
            arr = data.roadAddress; //도로명 주소
        }else{
            arr = data.jibunAddress; //지역명 주소
        }
        setZipcode(data.zonecode);
        setAddress(arr)
        setIsOpen(!isOpen)
    }
    //모달 보이기.숨기기
    const toggle =()=>{
        setIsOpen(!isOpen)
    }

    return(
        <div>
            <input type='text' value={zipcode} placeholder='우편번호' readOnly name='post' id='post'/>
            <button type='button' id='userAddSearch'onClick={toggle}>우편번호 검색</button>
            <input type='text' value={address} placeholder='도로명주소' readOnly name='useAddress' id='useAddress'/>
            <input type='text' placeholder='상세 주소' name='detailAddress' id='detailAddress'/>
            {/* 모달 만들기 */}
            {isOpen &&
                <div className='modalOverlay' onClick={toggle}>
                    <button className='outbtn' onClick={toggle}>X</button>
                    <DaumPostCode onComplete={completeHandler}/>
                </div>
            }
        </div>
    )
}