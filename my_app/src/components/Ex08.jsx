function Ex08(){
    const Foods = [{id:0,name:'김치찌개',detail:'얼큰한 김치찌개',price:8000},
        {id:0,name:'된장찌개',detail:'구수한 된장찌개',price:7000},
        {id:0,name:'비빔밥',detail:'건강한 비빔밥',price:9000}
    ]


    return(
        <>
          {Foods.map((it)=>(
            <div className="food-card" key={it}>
                <h3>{it.name}</h3>
                <p className="detail">{it.detail}</p>
                <p className="price">{`${it.price.toLocaleString()}원`}</p>
            </div>
          ))}
        </>
    )
}
export default Ex08