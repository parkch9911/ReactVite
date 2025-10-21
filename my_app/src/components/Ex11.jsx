function Ex11(){
  const nav = {name:'무선이어폰',detail:'고음질 블루투스 이어폰',price:89000}

    return(
        <>
          <div className="photo-card">
              <img src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400"/>
              <h3>{nav.name}</h3>
              <p>{nav.detail}</p>
              <strong>{`${nav.price.toLocaleString()}원`}</strong>   
          </div>   
        </>
    )
}
export default Ex11