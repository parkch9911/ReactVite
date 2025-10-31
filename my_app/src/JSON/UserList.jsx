export default function UserList(props){
    console.log(props.data)
    return(
        <>
            <ul>
                {props.data.map((user)=>(
                    <li key={user.id}>{user.title}</li>
                ))}
            </ul>
        </>
    )
}