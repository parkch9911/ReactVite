//ZmovieList부모의 자식
//ZmovieApp의 손자
export default function ZmovieItem(props){
    return(
        <>
            <li>
                {/* ZmovieItem이 부모로부터 물려받은 데이터는 
                movie이다. movie = [{id:value,title:value,review:value}] */}
                {props.movie.title}
                <button type="button" onClick={()=>props.onSelect(props.movie)}>상세보기</button>
            </li>
        </>
    )
}