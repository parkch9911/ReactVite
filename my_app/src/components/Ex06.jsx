
 import ReactSVG from "../assets/react.svg"

function Ex06(){
   

    return(
        <>
            <div className="gallery">
                <div className="imgCard">
                    <img src={ReactSVG} alt="풍경"/>
                    <p>푸른 바다</p>
                </div>
                <div className="imgCard">
                    <img src="./images/image02.png" alt="풍경"/>
                    <p>아름다운 산</p>
                </div>
                <div className="imgCard">
                    <img src="./images/image03.png" alt="풍경"/>
                    <p>도시의 야경</p>
                </div>
            </div>
        </>
    )
}
export default Ex06