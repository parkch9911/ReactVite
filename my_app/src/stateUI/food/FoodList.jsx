

export default function FoodList(props){
    return(
        <>
            <ul>
                {props.foods.map((item)=>(
                    <li key={item.id}>
                        <span>{item.name+' : '}</span>
                        <span>{item.price.toLocaleString()+'원'}</span>
                        <button type="button" onClick={()=>props.addCart(item)}>Add</button>
                    </li>
                ))}
            </ul>
        </>
    )
}