import React,{useState} from 'react'

//인풋에 onChange()함수 이용해 작성
// element.target.value => 인풋에 입력한 값을 가져올 수 있음.
// e.target.value

export default function Exstate11(){
    const [color,setColor]=useState('');

    return(
        <>
            <div>
                <input onChange={(e)=>{setColor(e.target.value)}} placeholder='ex) red'></input>
                <div style={{backgroundColor: color,
                    width:'100px',
                    height:'100px',
                    border:'1px solid black'
                }}></div>
            </div>
        </>
    )
}
//함수안에는 if문 사용 가능함