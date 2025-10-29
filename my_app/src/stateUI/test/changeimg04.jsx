import { useState } from "react";

export default function Changeimg04(){

// 카테고리 1, 카테고리 2 == 카테고리 별 이미지를 탭메뉴 출력
// 조건에 만족하는 값을 하나가 안리ㅏ 여러개 배열로 추출하는 함수
// => 배열이름.filter((요소,인덱스,원본배열)=>{return조건})
// 조건에 만족하는 새로운 배열을 반환한다.
// 조건에 만족하지 않으면 빈 배열 [ ] 반환한다.
// imgs.filter((img)=>조건 입력 )      ->  조건에 만족한다? [{id:1},{id:2},{id:3},{id:4}]

     const imgs = [
                    { id: 1, name: 'pic-1.jpg', category: 1, star:0},
                    { id: 2, name: 'pic-2.jpg', category: 1, star:5},
                    { id: 3, name: 'pic-3.jpg', category: 1, star:0},
                    { id: 4, name: 'pic-4.jpg', category: 1, star:5},
                    { id: 5, name: 'tree-1.jpg', category: 2, star:0},
                    { id: 6, name: 'tree-2.jpg', category: 2, star:5},
                    { id: 7, name: 'tree-3.jpg', category: 2, star:0},
                    { id: 8, name: 'tree-4.jpg', category: 2, star:5},
                ];


    //선택한 카테고리의 값이 담기는 변수
    //초기값을 cate = 1로 줌
    //고로 카테고리 =1 인 배경 이미지가 출력되게                 
    const [cate,setCate]=useState(1);
    //star의 필터되 결과의 상태를 변경하는 상태 변경 필요
    const[star,setStar]=useState(false);

    // 배열이름.filter()
    const filterImg = imgs.filter((img)=>img.category === cate)
    //star ==  5에 해당하는 filter 하는 변수 만든다.
    const bestImg = imgs.filter((img)=>img.star === 5)


    return(
        <>
            <div>
                <h3>이미지 탭 전환 예제</h3>
                <button type="button" onClick={()=>{setCate(1);setStar(false);}}>배경</button>
                <button type="button" onClick={()=>{setCate(2);setStar(false);}}>나무</button>
                <button type="button" onClick={()=>setStar(true)}>베스트</button>
            </div>

            <div style={{display:'flex'}}>
                {/* map()이 필요 => 배열로 =>filter()는 배열로 담김 */}
                {/* filter()로 추출한 결과를 map()으로 */}
                {(star? bestImg:filterImg).map((img,index)=>(
                    <img key={index} src={'/images/'+img.name} alt={img.name}
                    style={{width:'100px'}}/>
                ))}
            </div>
        </>
    )
}
// 배열이 있음. 
// 스테이트에 기본값 1로 주고 이 1은 나중에 배열의 category의 밸류값 비교용으로 사용할거임
//  그래서 버튼에 배경 누르면 1, 나무 누르면 2 줫음
//  filterImg 변수에 imgs배열에 필터 주고 img.category가 온클릭으로 변한다면? 1 또는 2로 
//  그러면 필터된 새로운 배열이 map으로 재구성되어서 이미지 출력한다.  