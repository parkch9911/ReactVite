//함수 이름의 첫 글자는 반드시 대문자로 작성한다
function Test12(){
    //문제 : score 의 값에 따라 다른 색상을 표시하시오
    //score가 80 이상이면 파란색,
    //score가 60 이상이면 초록색,
    //그 이외에는 빨간색으로 출력되도록 작성
    //단, 삼항 연산자 이용
    const score = 80;

    //함수 안에는 반드시 return() 안에 작성
    return(
        //<></> 빈 태그 프래그먼트 이용해 작성
        <> 
            <h1 style = {{color : score >= 80? "blue": score >= 60? 'green':'red'}}>{score}</h1>
        </>
    )
}
//테스트12함수를 내보낸다.
export default Test12;