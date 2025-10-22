import React,{useState} from 'react'

export default function Exstate07(){
    const [box,setBox]=useState('red');
    const change = ()=>{setBox(box==='red'?'green':box==='green'?'blue':'red')}
    return(
        <>
            <div style={{width:'120px',
                height:'120px',
                marginBottom:'10px',
                backgroundColor:box
            }}>
            </div>
            <button style={{border:'1px solid black'}} onClick={change}>다음 색상</button>
        </>
    )
}
