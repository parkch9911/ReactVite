//자식 컴포넌트인 child()컴포넌트를 import한다.
import Child from "./child"

function Parents(){
    return(
        <>
            <Child name='홍길동'/>
            <Child name='진달래'/>
            <Child name='김성중'/>
        </>
    )
}
export default Parents