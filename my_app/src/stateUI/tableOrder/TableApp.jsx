import { useEffect, useState } from "react";
import TableList from "../tableOrder/TableList";
import './tableorder.css'

export default function TableApp(){

    //기본 배열 id, name, img, price, cate, best  
    const [menus] =useState([
                    {id:1, name:'김치찌개',dep:'돼지고기 듬뿍 김치찌개',img:'food_1',price:8900, cate:1, best:'Y'},
                    {id:2, name:'된장찌개',dep:'구수한 집된장찌개',img:'food_2',price:8900, cate:1, best:'N'},
                    {id:3, name:'제육볶음',dep:'매콤한 제육볶음',img:'food_3',price:9500, cate:1, best:'Y'},
                    {id:4, name:'불고기',dep:'달콤짭쪼름한 불고기',img:'food_4',price:9500, cate:1, best:'N'},
                    {id:5, name:'비빔밥',dep:'다양한 나물의 조화',img:'food_5',price:8500, cate:1, best:'N'},
                    {id:6, name:'김치볶음밥',dep:'반숙 계란과 함께',img:'food_6',price:8900, cate:1, best:'N'},
                    {id:7, name:'돈까스',dep:'바삭한 등심돈까스',img:'food_7',price:10000, cate:1, best:'Y'},
                    {id:8, name:'오므라이스',dep:'부드러운 계란 오므라이스',img:'food_8',price:9000, cate:1, best:'N'},
                    {id:9, name:'냉면',dep:'여름철 시원한 냉면',img:'food_9',price:8500, cate:1, best:'N'},
                    {id:10, name:'떡볶이',dep:'매콤달콤 대표 분식',img:'food_10',price:7000, cate:1, best:'Y'},
                    {id:11, name:'순대국밥',dep:'따뜻한 국밥 한 그릇',img:'food_11',price:8500, cate:1, best:'N'},
                    {id:12, name:'카레라이스',dep:'부드러운 일본식 카레',img:'food_12',price:9500, cate:1, best:'N'},
                    {id:13, name:'오징어볶음',dep:'매콤한 오징어볶음',img:'food_13',price:13000, cate:2, best:'N'},
                    {id:14, name:'닭발',dep:'불맛 가득 매운 닭발',img:'food_14',price:14000, cate:2, best:'Y'},
                    {id:15, name:'감자튀김',dep:'바삭한 감자튀김',img:'food_15',price:8000, cate:2, best:'Y'},
                    {id:16, name:'골뱅이무침',dep:'맥주와 찰떡궁합',img:'food_16',price:15000, cate:2, best:'N'},
                    {id:17, name:'계란말이',dep:'부드럽고 고소한 계란말이',img:'food_17',price:9000, cate:2, best:'Y'},
                    {id:18, name:'마른안주세트',dep:'오징어 + 땅콩 세트',img:'food_18',price:12000, cate:2, best:'Y'},
                    {id:19, name:'치즈볼',dep:'달콤쫄깃 치즈볼',img:'food_19',price:9000, cate:2, best:'N'},
                    {id:20, name:'순살치킨',dep:'바삭하고 촉촉한 순살치킨',img:'food_20',price:15000, cate:2, best:'Y'},
                    {id:21, name:'소시지야채볶음',dep:'야채와 함께 볶은 소시지',img:'food_21',price:13000, cate:2, best:'Y'},
                    {id:22, name:'두부김치',dep:'따뜻한 두부에 김치볶음',img:'food_22',price:12000, cate:2, best:'N'},
                    {id:23, name:'감바스',dep:'새우와 올리브오일의 풍미',img:'food_23',price:16000, cate:2, best:'N'},
                    {id:24, name:'떡갈비',dep:'육즙 가득 떡갈비',img:'food_24',price:14000, cate:2, best:'N'},
                    {id:25, name:'소주',dep:'국민 술',img:'food_25',price:5000, cate:3, best:'Y'},
                    {id:26, name:'맥주',dep:'시원한 생맥주',img:'food_26',price:6000, cate:3, best:'Y'},
                    {id:27, name:'막걸리',dep:'전통의 맛',img:'food_27',price:5000, cate:3, best:'N'},
                    {id:28, name:'처음처럼',dep:'깔끔한 처음처럼',img:'food_28',price:5000, cate:3, best:'N'},
                    {id:29, name:'사케',dep:'일본식 청주',img:'food_29',price:10000, cate:3, best:'N'},
                    {id:30, name:'와인',dep:'고급스러운 와인',img:'food_30',price:12000, cate:3, best:'N'},
                    {id:31, name:'하이볼',dep:'위스키+탄산 조합',img:'food_31',price:9000, cate:3, best:'N'},
                    {id:32, name:'칵테일',dep:'달콤한 칵테일',img:'food_32',price:8000, cate:3, best:'N'},
                    {id:33, name:'진토닉',dep:'상큼한 진토닉',img:'food_33',price:8000, cate:3, best:'N'},
                    {id:34, name:'복분자주',dep:'달콤한 과실주',img:'food_34',price:10000, cate:3, best:'N'},
                    {id:35, name:'위스키',dep:'깊은 풍미의 위스키',img:'food_35',price:12000, cate:3, best:'N'},
                    {id:36, name:'샴페인',dep:'축하주로 인기',img:'food_36',price:15000, cate:3, best:'N'},
                ])

// imgs.filter((img)=>조건 입력 )   

    // 카테고리 구분용 1
    const [tab,setTab]= useState(1)
    const [best,setBest]= useState(false)
    // 필터로 걸러서 map돌려야함
    // foods매개변수 
    const changeTab = menus.filter((foods)=>foods.cate === tab)
    const bestTab = menus.filter((foods)=>foods.best === 'Y')

    // 빈배열 담기용
    const [cart,setCart]=useState([])
    // 모달 상태 담기용
    const [modal,setModal]=useState(false)
    //주문완료 모달 띄우기
    const [commit,setCommit]=useState(false)

    //addcart함수
    //매개변수 product 
    const addcart = (product)=>{
        //얕은복사
        let cartCopy = [...cart];
        let isHere = false;
        //이건 어차피 카트 복사본이니까 cart나 cartCopy나 길이는 같겟지?
        for(let i=0; i<cartCopy.length; i++){
            // 누른 상품의 id가 복사배열의 해당 인덱스의id 와 같은게 있으면
            // 해당 복사배열의 인덱스값에 quantity 키의 밸류를 1 증가시켜라.
            // 이미 복사배열에 있는지 = true 
            if(product.id === cartCopy[i].id){
                cartCopy[i].quantity += 1;
                isHere = true;
                break;
            }
        }
            //이미 복사배열에 있는 값이 false가 아니다? => 복사배열에 존재하지않으면
            // 복사배열에 넣기 해당 키 밸류값  + 수량 1로 집어넣기
            if(!isHere){
                cartCopy.push({id:product.id,
                               name:product.name,
                               img:product.img,
                               price:product.price,
                               cate:product.cate,
                               best:product.best,
                               quantity:1
                })
            }
            //빈 배열(장바구니)에 추가된 항목 넣기
            //장바구니가 새로운 복사배열로 변경된다.
            setCart(cartCopy)
    }
// 수량 증가버튼
    const plus = (index)=>{
        let cartCopy = [...cart]
        if(cartCopy[index].quantity < 11){
            cartCopy[index].quantity += 1;
        }
    
    setCart(cartCopy);
}
// 수량 감소버튼
    const minus = (index)=>{
        let cartCopy = [...cart]
        if(cartCopy[index].quantity > 1){
            cartCopy[index].quantity += -1;
        }
    // }
    setCart(cartCopy);
}
//항목 삭제 버튼
    const dele = (index)=>{
        let cartCopy = [...cart]
        cartCopy.splice(index,1)
        setCart(cartCopy);
    }

//===================================================

    const [total,setTotal]=useState(0)
    useEffect(()=>{
        let res = 0;
        for(let i=0; i<cart.length; i++){
            res += cart[i].quantity*cart[i].price
        }
        setTotal(res)
    },[cart])
    console.log(total)

    return(
        <>
            {/* 원본배열 있어야 상품출력, 장바구니 담기버튼, setTab, 필터함수 , 인기메뉴 필터도*/}
            <TableList menus={menus}
            cart={cart}
            setCart={setCart}
            setTab={setTab}
            tab={tab}
            changeTab={changeTab}
            addcart = {addcart}
            modal={modal}
            setModal = {setModal} 
            commit = {commit}
            setCommit = {setCommit}
            plus={plus}
            minus={minus}
            dele={dele}
            best={best}
            setBest={setBest}
            bestTab={bestTab}
            total={total}
            />
            {/* 모달 true면 이거 보이게 하기 */}
        </>
    )
}