export default function CartModal(props){
    for(let i = 0; i<props.cart.length; i++){
          console.log(`${props.cart[i].name}`)
          console.log(`${props.cart[i].price}`)
          console.log(`${props.cart[i].quantity}`)
    }
  
    return(
        <>
            <div style={{position:'fixed',
               top:0, left:0, width:'100%',
               height:'100%',
               background:'rgba(0,0,0,0.2)',
               display:'flex',
               justifyContent:'center',
               alignItems:'center'
                }}>
                    <div style={{
                    background:'white',
                    padding:'20px',
                    borderRadius:'5px',
                    width:'300px',
                    }}>
                        <h3>My Cart</h3>
                        <ul>
                            {props.cart.map((item,index)=>(
                                <li key={index}>
                                    <span>{item.name}</span>
                                    <button type="button" onClick={props.minus}>-</button>
                                    <span>{item.quantity}</span>
                                    <button type="button" onClick={props.plus}>+</button>
                                    {/* <span>{`Each Price : ${item.price*item.quantity}원`}</span> */}
                                </li>
                            ))}
                        </ul>

                        <button type="button" onClick={props.onClose}>Close</button>
                    </div>
            </div>
        </>
    )
}