function Ex04(){
    const fruits = ['사과','바나나','오렌지','포도']
    return(
        <>
            <h2>과일 목록</h2>
            <ul>
                {fruits.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}
export default Ex04