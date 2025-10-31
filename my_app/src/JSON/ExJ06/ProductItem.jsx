export default function ProductItem(props){
    return(
        <>
            <ul className="productul">
                {props.data.slice(0,100).map((user)=>(
                <li className="productli" key={user.id}>
                    <img className='photo' src={`https://picsum.photos/150?random=${user.id}`}/>
                    {user.title.slice(0,15)}
                    <p>{user.id*1000}원</p>
                </li> 
                ))}
            </ul>
        </>
    )


}