import ProductItem from "./ProductItem"


//ul만 생성 할 예정
export default function ProductList(props){
return(
        <>
            <ul>
                {props.products.map((products)=>(
                    //자식 컴포넌트 ProductItem 태그로 가져온다
                    <ProductItem key={products.id}
                    products={products}
                    addCart={props.addCart}/>
                ))}
            </ul>
        </>
    )
}