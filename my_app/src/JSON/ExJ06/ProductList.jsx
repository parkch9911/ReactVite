import ProductItem from "../ExJ06/ProductItem";

export default function ProductList(props){
    return(

        <div className="productList">
            <ProductItem data={props.data}/>
        </div>

    )


}