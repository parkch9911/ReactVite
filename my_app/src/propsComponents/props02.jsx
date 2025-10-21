export default function UserCard02(props){

    return(
        <>
            <div style={{margin:'10px',boxShadow:'0 0 5px black',padding:'10px',borderRadius:'10px'}}>
                <p>이름: {props.name}</p>
                <p>나이: {props.age}</p>
                <p>도시: {props.city}</p>
            </div>
        </>
    )
}