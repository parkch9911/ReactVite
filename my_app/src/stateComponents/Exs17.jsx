import React,{useState} from 'react'

export default function Exstate17(){
const [text,setText] = useState(20) //초기값
const change =()=>{
    setText(text==20?25:20)
}
const color = text==25?'red':'#333'
    return(
        <>
            <div>
                <p style={{fontSize:text,
                    color:color
                }}>김성중 영포티!</p>
                <button onClick={change}>변화!</button>
            </div>
        </>
    )
}
