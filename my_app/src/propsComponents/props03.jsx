
export default function Product(props){
    return(
        <>
            <div style={{backgroundColor:'wheat',margin:'10px',padding:'10px'}}>
                <h2 style={{marginBottom:'10px'}}>{props.name}</h2>
                <p>가격 : {props.price.toLocaleString()}원</p>
            </div>
        </>
    )
}