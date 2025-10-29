import { useState } from "react";

export default function Hover04(){
    //activeTab == null 이면 이동할 탭 찾을 때 사용
    const[activeTab, setActiveTab]=useState(null)
    const tabs = [
        {id: 1, title:'HTML',content:'HTML은 웹의 구조를 담당한다.'},
        {id: 2, title:'CSS',content:'CSS는 스타일 담당한다.'},
        {id: 3, title:'JavaScript',content:'JS는 동작을 담당한다.'},
    ]

    //활성화된 탭의 내용 찾는 코드
    //배열 이름.find((요소,인덱스,원본배열)=>{return 조건})
    //조건을 만족하는 첫 번째 요소(그 객체 또는 값)을 반환
    //만약 못찾으면 undefined를 반환한다.
    //언제 쓰나요===검색이나 상세보기 .... 
    let contentText = '탭 위에 마우스를 올려보세요' //기본text
    if(activeTab!==null){                                       //액티브탭이 널이 아니라면
        const findTab = tabs.find((tab)=>tab.id === activeTab)  // 액티브탭과 같은 id를 가진 탭을 찾아야 함
        console.log(findTab) 
        //결론 findTab = 1 or 2 or 3이 들어감
        //탭을 찾았으면 그 탭의 내용(content)를 변경
        //contentText = content 로 수정한다.
        if(findTab){
                  console.log(contentText)
                console.log(findTab) 
            contentText = findTab.content
          
        }
    }

    return(
            <div style={{width:'400px',margin:'50px auto',}}>
                <h3>Hover Tab Menu</h3>
                <div style={{display:'flex',justifyContent:'space-around'}}>
                    {/* tabs.map((요소)=>()) */}
                    {tabs.map((item)=>(
                            <div key={item.id} style={{cursor:'pointer'}}
                            onMouseEnter={()=>setActiveTab(item.id)} //활성화
                            onMouseLeave={()=>setActiveTab(null)} //비활성화 
                            >{item.title}</div>
                    ))}
                </div>
                {/* 탭 영역 */}
                <div style={{marginTop:'20px',
                             padding:'15px',
                             backgroundColor:'#fefefe',
                             borderRadius:'5px',
                             height:'5px'}}>
                             {contentText}
                </div>
            </div>
    )
//map() => 반드시 태그의 고유 번호가 필요
//고유 key= {item.id}
}