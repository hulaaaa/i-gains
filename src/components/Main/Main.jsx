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
                    
                    <div className="divHeightInfo">
                        <div className="divHeightInfo-top">
                            <h1 style={{
                                color: "#000",
                                fontFamily: "Montserrat",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal"
                                }}>
                                Weight
                            </h1>
                        </div>
                        <div className="divHeightInfo-info">
                            <h1 style={{
                                color: "#000",
                                fontFamily: "Montserrat",
                                fontSize: "35px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal"
                                }}>
                                91
                            </h1>
                            <h1 style={{
                                color: "#7E7E7E",
                                fontFamily: "Montserrat",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                lineHeight: "normal"
                                }}>
                                kg
                            </h1>
                            <button>
                                <div className="divHeightInfo-btn">
                                    <h1 style={{
                                        color: "#7E7E7E",
                                        fontFamily: "Montserrat",
                                        fontSize: "10px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "normal"
                                        }}>
                                        Edit
                                    </h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8765 0.481513C10.2345 -0.160503 9.19354 -0.160506 8.55151 0.481513L0.793194 8.23984C0.563693 8.46934 0.407256 8.76164 0.343606 9.07986L0.0218928 10.6885C-0.131485 11.4553 0.544655 12.1315 1.31155 11.9781L2.9201 11.6564C3.23837 11.5928 3.53067 11.4363 3.76017 11.2068L11.5185 3.44848C12.1605 2.80647 12.1605 1.76555 11.5185 1.12353L10.8765 0.481513ZM9.32648 1.2565C9.54053 1.04249 9.88747 1.04249 10.1015 1.2565L10.7435 1.89852C10.9575 2.11252 10.9575 2.45949 10.7435 2.6735L9.27946 4.13752L7.86251 2.72052L9.32648 1.2565ZM7.08747 3.4955L1.56818 9.01482C1.49168 9.09132 1.43954 9.18875 1.41832 9.29484L1.0966 10.9034L2.70516 10.5816C2.81125 10.5604 2.90868 10.5083 2.98519 10.4318L8.50449 4.9125L7.08747 3.4955Z" fill="#0F0F0F"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="202" height="27" viewBox="0 0 202 27" fill="none">
                            <path d="M1 16.5C9.5213 19.6667 30.7744 26 47.6165 26C68.6692 26 90.4737 13.5 110.023 13.5C129.571 13.5 132.579 20.5 148.368 20.5C164.158 20.5 191.226 9.5 201 1" stroke="#00A053" stroke-opacity="0.5" stroke-width="2"/>
                        </svg>
                    </div>

                    <div className="divHeightInfo">
                        <div className="divHeightInfo-top">
                            <h1 style={{
                                color: "#000",
                                fontFamily: "Montserrat",
                                fontSize: "18px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal"
                                }}>
                                Calories
                            </h1>
                        </div>
                        <div className="divHeightInfo-info">
                            <h1 style={{
                                color: "#000",
                                fontFamily: "Montserrat",
                                fontSize: "35px",
                                fontStyle: "normal",
                                fontWeight: "700",
                                lineHeight: "normal"
                                }}>
                                1,8k
                            </h1>
                            <h1 style={{
                                color: "#7E7E7E",
                                fontFamily: "Montserrat",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "300",
                                lineHeight: "normal"
                                }}>
                                calories
                            </h1>
                            <button>
                                <div className="divHeightInfo-btn">
                                    <h1 style={{
                                        color: "#7E7E7E",
                                        fontFamily: "Montserrat",
                                        fontSize: "10px",
                                        fontStyle: "normal",
                                        fontWeight: "400",
                                        lineHeight: "normal"
                                        }}>
                                        Edit
                                    </h1>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8765 0.481513C10.2345 -0.160503 9.19354 -0.160506 8.55151 0.481513L0.793194 8.23984C0.563693 8.46934 0.407256 8.76164 0.343606 9.07986L0.0218928 10.6885C-0.131485 11.4553 0.544655 12.1315 1.31155 11.9781L2.9201 11.6564C3.23837 11.5928 3.53067 11.4363 3.76017 11.2068L11.5185 3.44848C12.1605 2.80647 12.1605 1.76555 11.5185 1.12353L10.8765 0.481513ZM9.32648 1.2565C9.54053 1.04249 9.88747 1.04249 10.1015 1.2565L10.7435 1.89852C10.9575 2.11252 10.9575 2.45949 10.7435 2.6735L9.27946 4.13752L7.86251 2.72052L9.32648 1.2565ZM7.08747 3.4955L1.56818 9.01482C1.49168 9.09132 1.43954 9.18875 1.41832 9.29484L1.0966 10.9034L2.70516 10.5816C2.81125 10.5604 2.90868 10.5083 2.98519 10.4318L8.50449 4.9125L7.08747 3.4955Z" fill="#0F0F0F"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="201" height="36" viewBox="0 0 201 36" fill="none">
                            <path d="M200 1C191.457 5.15625 163.475 28.4688 146.5 28.4688C123.5 28.4688 122.5 16 92.5 16C67.9386 16 54 22.5 45.5 28.4688C37 34.4375 16.5 36 1 31.5" stroke="#FF5D12" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="mainBodyMap">
                <div className="bodyImgDiv">
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