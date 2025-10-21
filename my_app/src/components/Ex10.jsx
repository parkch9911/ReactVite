function Ex10(){
  const nav = ['홈','소개','연락처']

    return(
        <>
          <ul className="list">
            {nav.map((item)=>(
              <li key={item} className="listText"><a href="#">{item}</a></li>
            ))}    
          </ul>   
        </>
    )
}
export default Ex10