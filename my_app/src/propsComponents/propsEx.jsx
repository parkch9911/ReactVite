//부모 Parents04
function Parents04(){
    // 화살표 함수 생성 sayHello() => alert('난 부모') 

    const sayHello = ()=>{
        alert('난 부모')
    }
    return(
        <>
        {/* onClickEvent : 그 함수를 담는 닉네임 */}
            <Button01 onClickEvent = {sayHello}/>
        </>

    )
}
export default Parents04


//자식 Button01
function Button01(props){
    return(
        <>
            <button onClick={props.onClickEvent}>눌러보기</button>
        </>
    )
}