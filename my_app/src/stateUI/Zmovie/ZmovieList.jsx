//자식인 MovieItem을 가져온다.
import ZmovieItem from "./ZmovieItem"
export default function ZmovieList(props){
    return(
        <>
             <ul>
                {/* <li 반복을 위해 map()함수 이용 */}
                {props.movie.map((movie)=>(
                    // 자식인 MovieItem 을 테그로 가져온다
                    <ZmovieItem key={movie.id} movie={movie} onSelect={props.onSelect}/>
                ))}
            </ul>
        </>
    )
}