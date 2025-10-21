//부모 컴포넌트 생성
function Parents03(){
    const userName = '진달래'
    const userAge = 25
    return(
    <>
        <Profile user={userName} age={userAge}/>
    </>   
    )
}
export default Parents03


//자식 컴포넌트 생성
//<div>
//     <h2>이름: {}<h2/>
//     <p>나이: {}</p>
//</div>
function Profile(props){
    return(
        <div>
            <h2>이름:{props.user}</h2>
            <p>나이:{props.age}</p>
        </div>
    )
}