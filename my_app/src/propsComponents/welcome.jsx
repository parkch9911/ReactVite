//부모 컴포넌트
function Parents02(){
    return <Welcome name='성중' />
}
export default Parents02


//자식 컴포넌트
//props 명령어를 사용하려면 자식과 부모가 같은
// jsx 파일안에 존재해야 함.
function Welcome(props){
    return <h1>안녕하세요.{props.name}님 </h1>
}
