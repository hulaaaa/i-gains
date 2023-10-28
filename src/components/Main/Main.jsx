import "./Main.css"
import bodyImg from "../../assets/img/Body_Muscle.png"
import avatar from "../../assets/img/avatar.png"
import  { useState, useRef } from "react";

const Main = () => {
    const [info, setInfo] = useState("");
    const areas = [
        {
            x: 65,
            y: 0,
            width: 45,
            height: 70,
            info: "єбало"
        },
        {
            x: 50,
            y: 100,
            width: 75,
            height: 50,
            info: "кінчай на сіськи"
        },
        {
            x: 55,
            y: 160,
            width: 63,
            height: 70,
            info: "прес качат бегом!"
        },
        {
            x: 85,
            y: 240,
            width: 20,
            height: 40,
            info: "хуй, член, піська"
        },
    ];
    
    const imageRef = useRef();
    const handleMouseMove = event => {
        const x = event.clientX - imageRef.current.offsetLeft;
        const y = event.clientY - imageRef.current.offsetTop;
        const area = areas.find((area) => {
            return area.x <= x && x <= area.x + area.width && area.y <= y && y <= area.y + area.height;
        });
        if (area) {
            const newInfo = area.info;
            setInfo(newInfo);
        }
        else setInfo("")
    };
    
    return (
        <div className="mainContDiv">
            <div className="mainInfoDiv">
                <h1 style={{
                        color: "#040404",
                        fontFamily: "Montserrat",
                        fontSize: "30px",
                        fontStyle: "normal",
                        fontWeight: "500",
                        lineHeight: "normal"
                }}>
                    Your body
                </h1>
                <div className="mainBlockDiv">

                    <div className="divShortInfo">
                        <div className="divShortInfo-textImg">
                            <img className="avatar-divShortInfo" src={avatar} alt="avatarImg" />
                            <div className="divShortInfo-text">
                                <h1 style={{
                                    color: "#FFF",
                                    fontFamily: "Montserrat",
                                    fontSize: "12px",
                                    fontStyle: "normal",
                                    fontWeight: "700",
                                    lineHeight: "normal"
                                }}>
                                    Dmytro H.
                                </h1>
                                <h1 style={{
                                color: "#FFF",
                                fontFamily: "Montserrat",
                                fontSize: "12px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                lineHeight: "normal"
                                }}>
                                    Male, 18 
                                </h1>
                            </div>
                        </div>

                        <div className="divShortInfo-btn">
                            <button className="btnShortInfo">
                                <h1 style={{
                                    color: "#040404",
                                    fontFamily: "Montserrat",
                                    fontSize: "12px",
                                    fontStyle: "normal",
                                    fontWeight: "500",
                                    lineHeight: "normal"
                                    }}>
                                    Full info
                                </h1>
                            </button>
                        </div>
                        
                    </div>

                </div>
            </div>
            <div className="mainBodyMap">
                <div className="bodyImgDiv">
                    {/* <div className="circle"></div> */}
                    <div className="info">
                        <h1>! {info} </h1>
                    </div>
                    <img ref={imageRef} onMouseMove={handleMouseMove} onMouseEnter={() => handleMouseMove()}  src={bodyImg} alt="bodyImg" className="bodyImg"/>
                </div>
                <div className="navigateBody">
                    <button>
                        <svg className="arrowBtnBody" xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                            <path d="M9 1L2 8.5L9 16" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    <h1 style={{
                        color: "#040404",
                        fontFamily: "Montserrat",
                        fontSize: "12px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "normal"
                        }}>
                        FRONT
                    </h1>
                    <button>
                        <svg className="arrowBtnBody" xmlns="http://www.w3.org/2000/svg" width="10" height="17" viewBox="0 0 10 17" fill="none">
                            <path d="M1 16L8 8.5L1 1" stroke="black" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
  }
  
export default Main