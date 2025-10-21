function Ex12(){
  const Telcard = {name:'테크 컴퍼니',adress:'서울시 강남구 테헤란로 123',tel:'02-1234-5678',email:'info@techcompany.com'}

    return(
        <>
          <div className="Card12">
            <h2>연락처</h2>
            <strong>회사명: <p style={{display:'inline-block'}}>{Telcard.name}</p></strong><br></br>
            <strong>주소: <p style={{display:'inline-block'}}>{Telcard.adress}</p></strong><br></br>
            <strong>전화: <p style={{display:'inline-block'}}>{Telcard.tel}</p></strong><br></br>
            <strong>이메일: <p style={{display:'inline-block'}}> {Telcard.email}</p></strong>
          </div>

        </>
    )
}
export default Ex12