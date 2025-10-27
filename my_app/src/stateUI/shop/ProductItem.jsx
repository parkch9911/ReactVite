

export default function ProductItem(props){
    return(
        <>
            <li>
                {props.products.name} - {props.products.price}원
                <button type="button" onClick={()=>props.addCart(props.products)}>담기</button>
            </li>
        </>
    )
}